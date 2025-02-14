import { Field, Float, InputType } from '@nestjs/graphql';
import { PlantType } from '@prisma/client';

@InputType()
export class CreateProductInput {

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Float)
  price: number;

  @Field({nullable: true})
  imageUrl?: string;

  @Field()
  type: PlantType;
}