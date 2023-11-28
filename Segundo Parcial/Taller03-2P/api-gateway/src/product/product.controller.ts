import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, } from '@nestjs/common';
import { ProductMsg } from 'src/common/contants';
import { ProductDTO } from './dto/product.dto';
import { clientProxyProductos } from 'src/common/proxy/client-proxy';
import { IProduct } from 'src/common/interfaces/product.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Observable } from 'rxjs';

@ApiTags('products')
@Controller('api/v2/products')
export class ProductController {
    constructor(private readonly clientProxy: clientProxyProductos) { }
    private _clientProxyProduct = this.clientProxy.clientProxyProducts();

    @Post()
    create(@Body() productDTO: ProductDTO): Observable<IProduct> {
        return this._clientProxyProduct.send(ProductMsg.CREATE, productDTO);
    }

    @Get()
    findAll(): Observable<IProduct[]> {
        return this._clientProxyProduct.send(ProductMsg.FIND_ALL, '');
    }

    @Get(':id')
    findOne(@Param('id') id: string): Observable<IProduct> {
        return this._clientProxyProduct.send(ProductMsg.FIND_ONE, id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() productDto: ProductDTO): Observable<IProduct> {
        return this._clientProxyProduct.send(ProductMsg.UPDATE, { id, productDto });
    }

    @Delete(':id')
    delete(@Param('id') id: string): Observable<any> {
        return this._clientProxyProduct.send(ProductMsg.DELETE, id);
    }
}

