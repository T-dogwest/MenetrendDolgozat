import { Module } from '@nestjs/common';
import { MenetrendService } from './menetrend.service';
import { MenetrendController } from './menetrend.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MenetrendController],
  providers: [MenetrendService,PrismaService],
})
export class MenetrendModule {}
