import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMenetrendDto } from './dto/create-menetrend.dto';
import { UpdateMenetrendDto } from './dto/update-menetrend.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MenetrendService {
  constructor(readonly db:PrismaService){}
  create(createMenetrendDto: CreateMenetrendDto) {

    return this.db.menetrend.create({data:createMenetrendDto});
  }

  async findAll() {
    try{
      const station=await this.db.menetrend.findMany();
      return station;
    }catch{
      throw new NotFoundException('Nem található állomás')
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} menetrend`;
  }

  update(id: number, updateMenetrendDto: UpdateMenetrendDto) {
    return `This action updates a #${id} menetrend`;
  }

  remove(id: number) {
    return `This action removes a #${id} menetrend`;
  }
}
