import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateProductInput, CreateProductInput } from './dto/inputs';
import { Product } from './entities/productos.entity';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class ProductService {

    constructor(
        @InjectModel(Product.name)
        private readonly productModel: Model<Product>,
    ) { }

    async create(createProductInput: CreateProductInput): Promise<Product> {
        const newProduct = new this.productModel(createProductInput)
        return await newProduct.save();
    }

    async findAll(): Promise<Product[]> {
        return this.productModel.find().exec()
    }

    async findAllActive(): Promise<Product[]> {
        return this.productModel.find({ estado: true }).exec();
    }


    async findOne(id: string): Promise<Product> {
        const cliente = await this.productModel.findById(id).exec();

        if (!cliente) throw new NotFoundException(`Not found`);
        return cliente;
    }

    async findOneIncludingInactive(id: string): Promise<Product> {
        return this.productModel.findById(id).exec();
    }

    async update(id: string, updateProductInput: UpdateProductInput): Promise<Product> {
        const { id: _, ...updateFields } = updateProductInput;

        const producto = await this.productModel.findByIdAndUpdate(id, updateFields, { new: true }).exec();

        if (!producto) {
            throw new NotFoundException(`Client with ID ${id} not found`);
        }

        return producto;
    }

    // async remove(id: string): Promise<Client> {
    //     const cliente = await this.productModel.findByIdAndDelete(id).exec();
    //     if (!cliente) {
    //         throw new NotFoundException(`Client with ID ${id} not found`);
    //     }
    //     return cliente.toObject();
    // }

    // marcar un registro como "eliminado" en lugar de eliminarlo físicamente de la base de datos.
    async remove(id: string): Promise<Product> {
        const producto = await this.productModel.findByIdAndUpdate(
            id,
            { estado: false },
            { new: true }
        ).exec();

        if (!producto) {
            throw new NotFoundException(`Client with ID ${id} not found`);
        }

        return producto.toObject();
    }

}
