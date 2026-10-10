var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadGatewayException, Injectable, UnauthorizedException, } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { firstValueFrom } from 'rxjs';
import { PrismaService } from '../prisma/prisma.service.js';
let AuthService = class AuthService {
    httpService;
    configService;
    prisma;
    constructor(httpService, configService, prisma) {
        this.httpService = httpService;
        this.configService = configService;
        this.prisma = prisma;
    }
    async login(loginDto) {
        const baseUrl = this.configService.get('AD_BASE_URL');
        const tokenEndpoint = this.configService.get('AD_AUTH_TOKEN');
        const getDataEndpoint = this.configService.get('AD_GETDATA_ENDPOINT');
        if (!baseUrl || !tokenEndpoint || !getDataEndpoint) {
            throw new BadGatewayException('Falta configurar el servicio de autenticación');
        }
        let tokenResponse;
        try {
            tokenResponse = await firstValueFrom(this.httpService.post(`${baseUrl}${tokenEndpoint}`, {
                username: loginDto.user,
                password: loginDto.password,
                group: loginDto.group,
            }));
        }
        catch (error) {
            if (axios.isAxiosError(error) &&
                [400, 401, 403].includes(error.response?.status ?? 0)) {
                throw new UnauthorizedException('Usuario o contraseña incorrectos');
            }
            throw new BadGatewayException('Error al comunicarse con el servidor de autenticación');
        }
        const token = tokenResponse.data.token;
        if (typeof token !== 'string' || token.length === 0) {
            throw new UnauthorizedException('El servicio de autenticación no devolvió un token válido');
        }
        let authResponse;
        try {
            authResponse = await firstValueFrom(this.httpService.post(`${baseUrl}${getDataEndpoint}`, {
                username: loginDto.user,
                password: loginDto.password,
                group: loginDto.group,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }));
        }
        catch {
            throw new BadGatewayException('No fue posible consultar los datos del usuario');
        }
        const data = authResponse.data;
        if (data?.validity !== true || data?.login !== true) {
            throw new UnauthorizedException('El usuario no está habilitado para ingresar');
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
        return { message: 'login exitoso', appUser };
    }
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpService,
        ConfigService,
        PrismaService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map