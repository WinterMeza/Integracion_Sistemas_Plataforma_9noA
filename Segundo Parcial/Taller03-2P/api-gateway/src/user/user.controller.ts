import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserMsg } from './../common/contants';
import { Observable } from 'rxjs';
import { UserDTO } from './dto/user.dto';
import { clientProxyProductos } from './../common/proxy/client-proxy';
import { IUser } from 'src/common/interfaces/user.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('users')
@UseGuards(JwtAuthGuard)
@Controller('api/v2/user')
export class UserController {
  constructor(private readonly clientProxy: clientProxyProductos) { }
  private _clientProxyUser = this.clientProxy.clientProxyUsers();

  @Post()
  create(@Body() userDTO: UserDTO): Observable<IUser> {
    return this._clientProxyUser.send(UserMsg.CREATE, userDTO);
  }

  @Get()
  findAll(): Observable<IUser[]> {
    return this._clientProxyUser.send(UserMsg.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IUser> {
    return this._clientProxyUser.send(UserMsg.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() userDTO: UserDTO): Observable<IUser> {
    return this._clientProxyUser.send(UserMsg.UPDATE, { id, userDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyUser.send(UserMsg.DELETE, id);
  }
}
