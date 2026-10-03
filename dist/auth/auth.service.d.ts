import { LoginDto } from './dto/login.dto.js';
export declare class AuthService {
    login(loginDto: LoginDto): {
        message: string;
        usuario: string;
        grupo: string;
    };
}
