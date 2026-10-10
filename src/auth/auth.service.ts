import {
  BadGatewayException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { firstValueFrom } from 'rxjs';
import { LoginDto } from './dto/login.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  async login(loginDto: LoginDto) {
    const baseUrl = this.configService.get<string>('AD_BASE_URL');
    const tokenEndpoint = this.configService.get<string>('AD_AUTH_TOKEN');
    const getDataEndpoint = this.configService.get<string>('AD_GETDATA_ENDPOINT');

    if (!baseUrl || !tokenEndpoint || !getDataEndpoint) {
      throw new BadGatewayException(
        'Falta configurar el servicio de autenticación',
      );
    }

    let tokenResponse;
    try {
      tokenResponse = await firstValueFrom(
        this.httpService.post(`${baseUrl}${tokenEndpoint}`, {
          username: loginDto.user,
          password: loginDto.password,
          group: loginDto.group,
        }),
      );
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        [400, 401, 403].includes(error.response?.status ?? 0)
      ) {
        throw new UnauthorizedException('Usuario o contraseña incorrectos');
      }

      throw new BadGatewayException(
        'Error al comunicarse con el servidor de autenticación',
      );
    }

    const token = tokenResponse.data.token;
    if (typeof token !== 'string' || token.length === 0) {
      throw new UnauthorizedException(
        'El servicio de autenticación no devolvió un token válido',
      );
    }

    let authResponse;
    try {
      authResponse = await firstValueFrom(
        this.httpService.post(
          `${baseUrl}${getDataEndpoint}`,
          {
            username: loginDto.user,
            password: loginDto.password,
            group: loginDto.group,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        ),
      );
    } catch {
      throw new BadGatewayException(
        'No fue posible consultar los datos del usuario',
      );
    }

    const data = authResponse.data;
    if (data?.validity !== true || data?.login !== true) {
      throw new UnauthorizedException(
        'El usuario no está habilitado para ingresar',
      );
    }

    const appUser = await this.prisma.app_user.upsert({
      where: {
        username: loginDto.user,
      },
      create: {
        username: loginDto.user,
        firstName: data.names,
        lastName: data.last_names,
        isActive: true,
      },
      update: {
        firstName: data.names,
        lastName: data.last_names,
        isActive: true,
      },
      select: {
        id: true,
        username: true,
        email: true,
        firstName: true,
        lastName: true,
        isActive: true,
      },
    });

    return {message : 'login exitoso',appUser};

  }

  
}
