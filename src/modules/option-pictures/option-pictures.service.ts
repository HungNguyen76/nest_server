import { Injectable } from '@nestjs/common';
import { CreateOptionPictureDto } from './dto/create-option-picture.dto';
import { UpdateOptionPictureDto } from './dto/update-option-picture.dto';

@Injectable()
export class OptionPicturesService {
  create(createOptionPictureDto: CreateOptionPictureDto) {
    return 'This action adds a new optionPicture';
  }

  findAll() {
    return `This action returns all optionPictures`;
  }

  findOne(id: number) {
    return `This action returns a #${id} optionPicture`;
  }

  update(id: number, updateOptionPictureDto: UpdateOptionPictureDto) {
    return `This action updates a #${id} optionPicture`;
  }

  remove(id: number) {
    return `This action removes a #${id} optionPicture`;
  }
}
