import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AdminSecretGuard extends AuthGuard('admin-secret') {
  canActivate(context: ExecutionContext) {
    // add your custom authentication logic here
    // for example, you can restrict certain requests based on user roles
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    // You can throw an exception based on either "info" or "err" arguments
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}