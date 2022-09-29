import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('shop') // 'shop' here is a route prefix
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users') // 'users' here is a route resource
  getHello(): string {
    return this.appService.getHello();
  }
}
