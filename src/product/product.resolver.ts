import { Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Query } from '@nestjs/common';
import { Product } from './product.model';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {
  }

  @Query(() => [Product], {name: 'products'})
  findAll() {
    return this.productService.findAll();
  }

}
