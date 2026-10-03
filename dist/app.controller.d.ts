import { AppService } from './app.service.js';
import { DatabaseTestService } from './database-test.service.js';
export declare class AppController {
    private readonly appService;
    private readonly databaseTestService;
    constructor(appService: AppService, databaseTestService: DatabaseTestService);
    getHello(): string;
    getHello2(): {
        message: string;
    };
    testDatabase(): Promise<{
        connected: boolean;
        totalUsers: number;
    }>;
}
