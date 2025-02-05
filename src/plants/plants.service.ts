import { Injectable, Param } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PlantsService {

  constructor(private prisma: PrismaService) {
  }

  getAllPlants() {
    return this.prisma.plant.findMany()
  }

  createPlant(data: { name: string; type: string }) {
    return this.prisma.plant.create({
      data
    });
  }
  async resetAutoIncrement(): Promise<void> {
    await this.prisma.$executeRaw`ALTER SEQUENCE plant_id_seq RESTART WITH 1`;
  }

  deletePlant(@Param('id') id: number) {
    return this.prisma.plant.delete({
      where: {id}
    })
  }
}
