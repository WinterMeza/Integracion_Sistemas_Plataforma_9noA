import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class DetailDTO {
    @IsString()
    @IsNotEmpty()
    proforma: string;

    @IsString()
    @IsNotEmpty()
    id_product: string;

    @IsString()
    @IsNotEmpty()
    id_tag: string;

    @IsNumber()
    @IsNotEmpty()
    container_number: number;

    @IsNumber()
    @IsNotEmpty()
    box_number: number;

    @IsNumber()
    @IsNotEmpty()
    box_amount: number;

    @IsString()
    @IsNotEmpty()
    id_container_size: string;

    @IsString()
    @IsNotEmpty()
    id_lid_type: string;

    @IsNumber()
    @IsNotEmpty()
    net_weight: number;

    @IsNumber()
    @IsNotEmpty()
    drained_weight: number;

    @IsNumber()
    @IsNotEmpty()
    oil: number;

    @IsNumber()
    @IsNotEmpty()
    water: number;

    @IsNumber()
    @IsNotEmpty()
    loins: number;

    @IsNumber()
    @IsNotEmpty()
    crumbs: number;
}