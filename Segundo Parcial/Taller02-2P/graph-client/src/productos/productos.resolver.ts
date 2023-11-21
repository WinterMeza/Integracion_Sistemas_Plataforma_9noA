import { Resolver, Query, Mutation, Args, ID, Int, ResolveProperty } from '@nestjs/graphql';
import { ProductService } from './productos.service';
import { Product } from './entities/productos.entity';
import { UpdateProductInput, CreateProductInput } from './dto/inputs';
import { ParseUUIDPipe, NotFoundException } from '@nestjs/common';

@Resolver(() => Product)
export class ProductResolver {
    constructor(private readonly productService: ProductService) { }

    @Mutation(() => Product)
    async createCliente(@Args('createProductInput') createProductInput: CreateProductInput): Promise<Product> {
        const createdProduct = await this.productService.create(createProductInput);
        return createdProduct;
    }


    @ResolveProperty('createProduct', () => Product)
    async getCreateCliente(@Args('id', { type: () => ID }, ParseUUIDPipe) id: string): Promise<Product> {
        return this.productService.findOne(id);
    }

    // @Query(() => [Client], { name: 'clientes' })
    // async findAll(): Promise<Client[]> {
    //     return this.clientesService.findAll()
    // }

    @Query(() => [Product], { name: 'products' })
    async findAll(): Promise<Product[]> {
        //Clientes Activos
        return this.productService.findAllActive();
    }


    // @Query(() => Client, { name: 'cliente' })
    // async findOne(@Args('id', { type: () => ID }) id: string): Promise<Client> {
    //     const cliente = await this.clientesService.findOne(id);
    //     if (!cliente) {
    //         throw new NotFoundException(`Client with ID ${id} not found`);
    //     }
    //     return cliente;
    // }

    @Query(() => Product, { name: 'producto' })
    async findOne(@Args('id', { type: () => ID }) id: string): Promise<Product> {
        const producto = await this.productService.findOneIncludingInactive(id);
        if (!producto) {
            throw new NotFoundException(`Client with ID ${id} not found`);
        }
        return producto;
    }

    @Mutation(() => Product)
    async updateCliente(
        @Args('id', { type: () => ID }) id: string, 
        @Args('updateProductInput') updateProductInput: UpdateProductInput
    ): Promise<Product> {
        const updatedProduct = await this.productService.update(id, updateProductInput);
        if (!updatedProduct) {
            throw new NotFoundException(`Client with ID ${id} not found`);
        }
        return updatedProduct;
    }

    @Mutation(() => Product)
    async removeCliente(@Args('id', { type: () => ID }) id: string): Promise<Product> {
        const deletedProduct = await this.productService.remove(id)
        if (!deletedProduct) {
            throw new NotFoundException(`Client with ID ${id} not found`);
        }
        return deletedProduct
    }

}
