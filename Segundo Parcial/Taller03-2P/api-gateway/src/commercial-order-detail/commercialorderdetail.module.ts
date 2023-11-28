import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { DetailController } from './commercialorderdetail.controller';

@Module({
    imports: [ProxyModule],
    controllers: [DetailController],
})
export class CommercialOrderDetailModule { }