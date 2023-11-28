import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { OrderController } from './commercialorder.controller';

@Module({
    imports: [ProxyModule],
    controllers: [OrderController],
})
export class CommercialOrderModule { }