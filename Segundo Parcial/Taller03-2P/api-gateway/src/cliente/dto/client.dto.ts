import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ClientDTO {
    @IsString()
    @IsNotEmpty()
    name_cliente: string;

    @IsString()
    @IsNotEmpty()
    direction: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsNotEmpty()
    id_city: string;

    @IsString()
    @IsNotEmpty()
    id_client_type: string;

    @IsString()
    @IsNotEmpty()
    ci_client: string;
}