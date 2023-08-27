import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService : ConfigService) {}

  getHello(): string {
    // return process.env.HELLO;
    return this.configService.get('HELLO');
  }
}
