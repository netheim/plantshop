import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductInput } from './dto/create-product.input';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {

  constructor(private readonly prisma: PrismaService) {
  }

  async create(data: CreateProductInput) {
    return this.prisma.product.create({data})
  }

  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany()
  }

}
