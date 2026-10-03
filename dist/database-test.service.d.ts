import { PrismaService } from './prisma/prisma.service.js';
export declare class DatabaseTestService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    testConnection(): Promise<{
        connected: boolean;
        totalUsers: number;
    }>;
}
