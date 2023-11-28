import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CommercialOrderDTO {
    @IsString()
    @IsNotEmpty()
    proforma: string;

    @IsString()
    @IsNotEmpty()
    contract_number: string;

    @IsString()
    @IsNotEmpty()
    id_client: string;

    @IsString()
    @IsNotEmpty()
    id_destiny: string;

    @IsString()
    @IsNotEmpty()
    id_brand: string;

    @IsString()
    @IsNotEmpty()
    id_kind: string;

    @IsString()
    @IsNotEmpty()
    id_type_container: string;

    @IsString()
    @IsNotEmpty()
    id_liquid_hedging: string;

    @IsString()
    @IsNotEmpty()
    id_cardboard: string;

    @IsNumber()
    @IsNotEmpty()
    container_box: number;

    @IsString()
    @IsNotEmpty()
    date: string;

    @IsString()
    @IsNotEmpty()
    date_entry: string;
}