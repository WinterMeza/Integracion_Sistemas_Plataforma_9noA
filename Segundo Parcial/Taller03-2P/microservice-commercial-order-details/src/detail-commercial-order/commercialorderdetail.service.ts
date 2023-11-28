import { DetailDTO } from "./dto/commercialorderdetail.dto";
import { HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CODETAIL } from 'src/common/models/models';
import { IDetail } from "src/common/interface/detailcommercialorder.interface";

@Injectable()
export class CODetailService {
    constructor(@InjectModel(CODETAIL.name) private readonly model: Model<IDetail>) { }


    async create(detailDTO: DetailDTO): Promise<IDetail> {
        const newCODetail = new this.model(detailDTO);
        return await newCODetail.save();
    }

    async findAll(): Promise<IDetail[]> {
        return await this.model.find();
    }

    async findOne(id: string): Promise<IDetail> {
        return await this.model.findById(id);
    }

    async update(id: string, codetailtDTO: DetailDTO): Promise<IDetail> {
        return await this.model.findByIdAndUpdate(id, codetailtDTO, { new: true });
    }

    async delete(id: string) {
        await this.model.findByIdAndDelete(id);
        return {
            status: HttpStatus.OK,
            msg: 'Deleted',
        };
    }
}