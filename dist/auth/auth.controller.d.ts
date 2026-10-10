import { AuthService } from './auth.service.js';
import { LoginDto } from './dto/login.dto.js';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
