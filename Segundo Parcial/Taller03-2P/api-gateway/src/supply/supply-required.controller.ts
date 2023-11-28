import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, } from '@nestjs/common';
import { SupplyRequiredMsg } from 'src/common/contants';
import { Observable } from 'rxjs';
import { SupplyRequiredDTO } from './dto/supply-required.dto';
import { clientProxyProductos } from 'src/common/proxy/client-proxy';
import { ISupplyRequired } from 'src/common/interfaces/supply_required.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('supplies')
@Controller('api/v2/supplies')
export class SupplyController {
    constructor(private readonly clientProxy: clientProxyProductos) { }
    private _clientProxySupply = this.clientProxy.clientProxySupply();

    @Post()
    create(@Body() supplyDTO: SupplyRequiredDTO): Observable<ISupplyRequired> {
        return this._clientProxySupply.send(SupplyRequiredMsg.CREATE, supplyDTO);
    }

    @Get()
    findAll(): Observable<ISupplyRequired[]> {
        return this._clientProxySupply.send(SupplyRequiredMsg.FIND_ALL, '');
    }

    @Get(':id')
    findOne(@Param('id') id: string): Observable<ISupplyRequired> {
        return this._clientProxySupply.send(SupplyRequiredMsg.FIND_ONE, id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() supplyDTO: SupplyRequiredDTO): Observable<ISupplyRequired> {
        return this._clientProxySupply.send(SupplyRequiredMsg.UPDATE, { id, supplyDTO });
    }

    @Delete(':id')
    delete(@Param('id') id: string): Observable<any> {
        return this._clientProxySupply.send(SupplyRequiredMsg.DELETE, id);
    }
}

