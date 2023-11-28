import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { ClientController } from './client.controller';

@Module({
    imports: [ProxyModule],
    controllers: [ClientController],
})
export class ClientModule { }