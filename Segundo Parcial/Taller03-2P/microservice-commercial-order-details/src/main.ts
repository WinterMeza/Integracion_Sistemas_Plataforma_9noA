import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { RabbitMQ } from './common/constants';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  // console.log('Microservice COMMERCIAL ORDER DETAIL is listening');

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.AMQP_URL],
      queue: RabbitMQ.CODETAILQueue,
    },
  });
  await app.listen();
  console.log('Microservice COMMERCIAL ORDER DETAIL is listening');
}
bootstrap();