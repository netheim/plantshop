import {Args, Int, Mutation, Resolver} from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Query } from '@nestjs/graphql';
import { Product } from './product.model';
import {CreateProductInput} from "./dto/create-product.input";
import {UpdateProductInput} from "./dto/update-product.input";

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {
  }

  @Query(() => [Product], {name: 'products'})
  async findAll() {
    return this.productService.findAll();
  }

  @Query(() => Product, {name: 'product'})
  async findOne(@Args('id', { type: () => Int }) id: number) {

  }

  @Mutation(() => Product, { name: 'createProduct' })
  async create(@Args('data') data: CreateProductInput) {
    return this.productService.create(data);
  }

  // @Mutation(() => Product, { name: 'updateProduct' })
  // async update(@Args('data') data: UpdateProductInput) {
  //   return this.productService.update(data)
  // }

}
