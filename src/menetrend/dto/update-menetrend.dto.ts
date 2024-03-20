import { PartialType } from '@nestjs/mapped-types';
import { CreateMenetrendDto } from './create-menetrend.dto';

export class UpdateMenetrendDto extends PartialType(CreateMenetrendDto) {}
