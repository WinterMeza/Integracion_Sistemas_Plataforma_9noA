import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, } from '@nestjs/common';
import { DetailMsg } from 'src/common/contants';
import { Observable } from 'rxjs';
import { DetailDTO } from './dto/commercialorderdetail.dto';
import { clientProxyProductos } from 'src/common/proxy/client-proxy';
import { IDetail } from 'src/common/interfaces/detailcommercialorder.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('commercialorderdetails')
@Controller('api/v2/commercial-order-detail')
export class DetailController {
    constructor(private readonly clientProxy: clientProxyProductos) { }
    private _clientProxyDetail = this.clientProxy.clientProxyDetail();

    @Post()
    create(@Body() supplyDTO: DetailDTO): Observable<IDetail> {
        return this._clientProxyDetail.send(DetailMsg.CREATE, supplyDTO);
    }

    @Get()
    findAll(): Observable<IDetail[]> {
        return this._clientProxyDetail.send(DetailMsg.FIND_ALL, '');
    }

    @Get(':id')
    findOne(@Param('id') id: string): Observable<IDetail> {
        return this._clientProxyDetail.send(DetailMsg.FIND_ONE, id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() supplyDTO: DetailDTO): Observable<IDetail> {
        return this._clientProxyDetail.send(DetailMsg.UPDATE, { id, supplyDTO });
    }

    @Delete(':id')
    delete(@Param('id') id: string): Observable<any> {
        return this._clientProxyDetail.send(DetailMsg.DELETE, id);
    }
}