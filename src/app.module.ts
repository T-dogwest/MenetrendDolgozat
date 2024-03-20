import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { MenetrendModule } from './menetrend/menetrend.module';

@Module({
  imports: [MenetrendModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
