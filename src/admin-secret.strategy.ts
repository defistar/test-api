import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-http-bearer';

@Injectable()
export class AdminSecretStrategy extends PassportStrategy(Strategy, 'admin-secret') {
  constructor(private readonly configService: ConfigService) {
    super();
  }

  async validate(token: string): Promise<any> {
    const adminSecret = this.configService.get<string>('CONFIG_ADMIN_SECRET');
    console.log('adminSecret', adminSecret);
    if (token === adminSecret) {
      return true;
    } else {
      throw new UnauthorizedException();
    }
  }
}