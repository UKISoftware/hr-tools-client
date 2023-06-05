import { Controller, Get, UseGuards,Req} from '@nestjs/common';
import { GoogleAuthService } from './google-auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('google-auth')
export class GoogleAuthController {
  constructor(private readonly googleAuthService:GoogleAuthService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    return null;
  }

  @Get('callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req) {
    return this.googleAuthService.googleLogin(req);
  }
}
