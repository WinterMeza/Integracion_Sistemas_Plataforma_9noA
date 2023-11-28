import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SupplyRequiredDTO {
    @IsString()
    @IsNotEmpty()
    register_date: string;

    @IsString()
    @IsNotEmpty()
    requirement_date: string;

    @IsString()
    @IsNotEmpty()
    comercial_order: string;

    @IsString()
    @IsNotEmpty()
    id_supply: string;

    @IsString()
    @IsNotEmpty()
    stock: string;

    @IsString()
    @IsNotEmpty()
    required_stock: string;

    @IsString()
    @IsNotEmpty()
    difference: string;

    @IsString()
    @IsNotEmpty()
    incoming_date: string;

    @IsString()
    @IsNotEmpty()
    state: string;

    @IsString()
    @IsNotEmpty()
    observation: string;
}