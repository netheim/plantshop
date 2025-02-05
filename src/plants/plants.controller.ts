import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PlantsService } from './plants.service';

@Controller('plants')
export class PlantsController {

  constructor(private readonly plantService: PlantsService) {}

  @Get()
  getAllPlants() {
    return this.plantService.getAllPlants()
  }

  @Post()
  createPlant( @Body() data: { name: string; type: string }) {
    return this.plantService.createPlant(data);
  }

  @Delete('/:id')
  deletePlant(@Param('id', ParseIntPipe) id: number) {


    return this.plantService.deletePlant(id)
  }
}


