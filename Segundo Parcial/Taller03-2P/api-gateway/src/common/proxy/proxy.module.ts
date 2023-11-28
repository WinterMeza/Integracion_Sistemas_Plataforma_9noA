import { Module } from '@nestjs/common';
import { clientProxyProductos } from './client-proxy';

@Module({
  providers: [clientProxyProductos],
  exports: [clientProxyProductos],
})
export class ProxyModule {}
