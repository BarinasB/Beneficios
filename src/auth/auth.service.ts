import { Injectable, UnauthorizedException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { LoginDto } from './dto/login.dto.js';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  async login(loginDto: LoginDto) {

    try {
    // 1. Obtener token
    const tokenResponse = await firstValueFrom(
      this.httpService.post('http://ldap/token', {
        usuario: loginDto.user,
        password: loginDto.password,
        grupo: loginDto.group,
      }),
    );

    const token = tokenResponse.data.token;

     if (!token) {
      throw new UnauthorizedException(
        'Usuario o contraseña incorrectos',
      );
    }

    // 2. Usar token en el segundo endpoint
    const authResponse = await firstValueFrom(
      this.httpService.post(
        'http://ldap/auth',
        {
          usuario: loginDto.user,
          grupo: loginDto.group,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ),
    );

    return authResponse.data;
    } catch (error) {
        throw new UnauthorizedException(
            'Usuario o contraseña incorrectos',
        );
        }
  }
}