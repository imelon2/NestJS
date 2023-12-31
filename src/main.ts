import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;


  /** ------ NEST SWAGGER ------ */
  const config = new DocumentBuilder()
  .setTitle('Sleact API')
  .setDescription('Sleact 개발을 위한 API 문서')
  .setVersion('1.0')
  .addCookieAuth('connect.sid')
  .addTag('cats')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger 주소 : /api
  /** -------------------------- */


  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  await app.listen(port);
  console.log(`listening on port ${port}`);
}

bootstrap();
