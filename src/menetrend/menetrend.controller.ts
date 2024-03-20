import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenetrendService } from './menetrend.service';
import { CreateMenetrendDto } from './dto/create-menetrend.dto';
import { UpdateMenetrendDto } from './dto/update-menetrend.dto';

@Controller('menetrend')
export class MenetrendController {
  constructor(private readonly menetrendService: MenetrendService) {}

  @Post()
  create(@Body() createMenetrendDto: CreateMenetrendDto) {
    return this.menetrendService.create(createMenetrendDto);
  }

  @Get()
  findAll() {
    return this.menetrendService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menetrendService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenetrendDto: UpdateMenetrendDto) {
    return this.menetrendService.update(+id, updateMenetrendDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menetrendService.remove(+id);
  }
}
