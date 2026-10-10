import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from './dto/login.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
export declare class AuthService {
    private readonly httpService;
    private readonly configService;
    private readonly prisma;
    constructor(httpService: HttpService, configService: ConfigService, prisma: PrismaService);
    login(loginDto: LoginDto): Promise<{
        message: string;
        appUser: {
            username: string;
            id: number;
            email: string | null;
            firstName: string | null;
            lastName: string | null;
            isActive: boolean;
        };
    }>;
}
