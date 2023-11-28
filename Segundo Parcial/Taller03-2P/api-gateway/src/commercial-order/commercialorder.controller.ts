import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, } from '@nestjs/common';
import { CommercialOrderMsg } from 'src/common/contants';
import { Observable } from 'rxjs';
import { CommercialOrderDTO } from './dto/commercialorder.dto';
import { clientProxyProductos } from 'src/common/proxy/client-proxy';
import { ICommercialOrder } from 'src/common/interfaces/commercialorder.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('commercialorder')
@Controller('api/v2/commercial-order')
export class OrderController {
    constructor(private readonly clientProxy: clientProxyProductos) { }
    private _clientProxyDetail = this.clientProxy.clientProxyCommercialOrder();

    @Post()
    create(@Body() orderDTO: CommercialOrderDTO): Observable<ICommercialOrder> {
        return this._clientProxyDetail.send(CommercialOrderMsg.CREATE, orderDTO);
    }

    @Get()
    findAll(): Observable<ICommercialOrder[]> {
        return this._clientProxyDetail.send(CommercialOrderMsg.FIND_ALL, '');
    }

    @Get(':id')
    findOne(@Param('id') id: string): Observable<ICommercialOrder> {
        return this._clientProxyDetail.send(CommercialOrderMsg.FIND_ONE, id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() orderDTO: CommercialOrderDTO): Observable<ICommercialOrder> {
        return this._clientProxyDetail.send(CommercialOrderMsg.UPDATE, { id, orderDTO });
    }

    @Delete(':id')
    delete(@Param('id') id: string): Observable<any> {
        return this._clientProxyDetail.send(CommercialOrderMsg.DELETE, id);
    }
}