import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AdminSecretGuard } from './admin-secret-auth.guard';


@Controller("/api/v1")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("/health")
  @UseGuards(AdminSecretGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/process")
  @UseGuards(AdminSecretGuard)
  process(@Body() body: any): any {
    return {
      isSuccessful: true,
      data: body
    }
  }

}
