var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import { DatabaseTestService } from './database-test.service.js';
let AppController = class AppController {
    appService;
    databaseTestService;
    constructor(appService, databaseTestService) {
        this.appService = appService;
        this.databaseTestService = databaseTestService;
    }
    getHello() {
        return this.appService.getHello();
    }
    getHello2() {
        return {
            message: 'Hola desde NestJS',
        };
    }
    testDatabase() {
        return this.databaseTestService.testConnection();
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    Get('hello2'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello2", null);
__decorate([
    Get('database-test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "testDatabase", null);
AppController = __decorate([
    Controller(),
    __metadata("design:paramtypes", [AppService,
        DatabaseTestService])
], AppController);
export { AppController };
//# sourceMappingURL=app.controller.js.map