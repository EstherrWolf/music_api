// src/auth/auth.controller.ts
import {
  Controller,
  Post,
  Body,
  UseGuards,
  ValidationPipe,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthToken } from './jwt-payload.interface';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body(new ValidationPipe()) loginDto: LoginDto): Promise<AuthToken> {
    return this.authService.login(loginDto);
  }

  @Post('register')
  async register(@Body(new ValidationPipe()) registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Get('protected')
  @UseGuards(JwtAuthGuard)
  getProtected() {
    return 'This is a protected route';
  }
}
