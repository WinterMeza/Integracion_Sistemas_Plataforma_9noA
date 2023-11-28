import { ClientDTO } from "./dto/client.dto";
import { HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CLIENT } from "src/common/models/models";
import { IClient } from "src/common/interfaces/client.interface";

@Injectable()
export class ClientService {
    constructor(@InjectModel(CLIENT.name) private readonly model: Model<IClient>) { }


    async create(clientDTO: ClientDTO): Promise<IClient> {
        const newClient = new this.model(clientDTO);
        return await newClient.save();
    }

    async findAll(): Promise<IClient[]> {
        return await this.model.find();
    }

    async findOne(id: string): Promise<IClient> {
        return await this.model.findById(id);
    }

    async update(id: string, clientDTO: ClientDTO): Promise<IClient> {
        return await this.model.findByIdAndUpdate(id, clientDTO, { new: true });
    }

    async delete(id: string) {
        await this.model.findByIdAndDelete(id);
        return {
            status: HttpStatus.OK,
            msg: 'Deleted',
        };
    }
}