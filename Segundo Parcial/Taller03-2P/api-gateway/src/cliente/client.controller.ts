import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, } from '@nestjs/common';
import { ClientMsg } from 'src/common/contants';
import { Observable } from 'rxjs';
import { ClientDTO } from './dto/client.dto';
import { clientProxyProductos } from 'src/common/proxy/client-proxy';
import { IClient } from 'src/common/interfaces/client.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('clients')
@Controller('api/v2/clients')
export class ClientController {
    constructor(private readonly clientProxy: clientProxyProductos) { }
    private _clientProxyClients = this.clientProxy.clientProxyClients();

    @Post()
    create(@Body() studentDTO: ClientDTO): Observable<IClient> {
        return this._clientProxyClients.send(ClientMsg.CREATE, studentDTO);
    }

    @Get()
    findAll(): Observable<IClient[]> {
        return this._clientProxyClients.send(ClientMsg.FIND_ALL, '');
    }

    @Get(':id')
    findOne(@Param('id') id: string): Observable<IClient> {
        return this._clientProxyClients.send(ClientMsg.FIND_ONE, id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() studentDTO: ClientDTO): Observable<IClient> {
        return this._clientProxyClients.send(ClientMsg.UPDATE, { id, studentDTO });
    }

    @Delete(':id')
    delete(@Param('id') id: string): Observable<any> {
        return this._clientProxyClients.send(ClientMsg.DELETE, id);
    }
}

