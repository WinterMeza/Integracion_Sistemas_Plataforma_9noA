import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { SupplyController } from './supply-required.controller';

@Module({
    imports: [ProxyModule],
    controllers: [SupplyController],
})
export class SupplyRequiredModule { }