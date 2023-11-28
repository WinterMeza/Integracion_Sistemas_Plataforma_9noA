import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { ProductController } from './product.controller';

@Module({
    imports: [ProxyModule],
    controllers: [ProductController],
})
export class ProductModule { }