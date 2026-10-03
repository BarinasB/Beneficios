import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

import { DatabaseTestService } from './database-test.service.js';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly databaseTestService: DatabaseTestService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello2')
  getHello2() {
    return {
      message: 'Hola desde NestJS',
    };
  }

   @Get('database-test')
  testDatabase() {
    return this.databaseTestService.testConnection();
  }

}
