import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AdminSecretGuard } from './admin-secret-auth.guard';
import { cp } from 'fs';


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
    console.log(`received request body: ${JSON.stringify(body)} `);
    const response = {
      isSuccessful: true,
      data: body
    }
    console.log(`sending response: ${JSON.stringify(response)} `);
    return response;
  }

}
