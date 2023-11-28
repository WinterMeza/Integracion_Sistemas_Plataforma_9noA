import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductDTO {
    // @ApiProperty()
    // @IsString()
    // @IsNotEmpty()
    // identificacion: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    code_erp: string;

    @IsString()
    @IsNotEmpty()
    tipo_item: string;

    @IsString()
    @IsNotEmpty()
    tipo_envase: string;

    @IsString()
    @IsNotEmpty()
    liquido_coberturas: string;

    @IsString()
    @IsNotEmpty()
    unidades_cajas: string;

    @IsString()
    @IsNotEmpty()
    especie: string;

    @IsString()
    @IsNotEmpty()
    peso_neto: string;

    @IsString()
    @IsNotEmpty()
    peso_drenado: string;
}