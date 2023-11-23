import { PartialType } from '@nestjs/mapped-types';
import { CreateOptionPictureDto } from './create-option-picture.dto';

export class UpdateOptionPictureDto extends PartialType(CreateOptionPictureDto) {}
