import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerMiddleware } from './middlewares/logger.middleware';

// const getEnv = async () => {
//   const response = await axios.get('/비밀키요청 API')
//   return {
//     DB_PASSWORD:response,
//     NAME:'DB_NAME'
//   }
// }

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true,load:[]})],
  controllers: [AppController],
  providers: [AppService,ConfigService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
