import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { PlantType } from '@prisma/client';

@ObjectType()
export class Product {

  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field({nullable: true})
  description?: string;

  @Field(()=> Float)
  price: number;

  @Field({nullable: true})
  imageUrl?: string;

  @Field()
  type: PlantType;

  @Field(() => Date)
  created_at: Date;
}