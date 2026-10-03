import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service.js';

@Injectable()
export class DatabaseTestService {
  constructor(private readonly prisma: PrismaService) {}

  async testConnection() {
    const totalUsers = await this.prisma.auth_user.count();

    return {
      connected: true,
      totalUsers,
    };
  }
}