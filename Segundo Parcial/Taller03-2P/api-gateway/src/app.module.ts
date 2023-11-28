import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { ClientModule } from './cliente/client.module';
import { SupplyRequiredModule } from './supply/supply-required.module';
import { CommercialOrderDetailModule } from './commercial-order-detail/commercialorderdetail.module';
import { CommercialOrderModule } from './commercial-order/commercialorder.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true
    }),
    ProductModule,
    ClientModule,
    SupplyRequiredModule,
    CommercialOrderDetailModule,
    CommercialOrderModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
