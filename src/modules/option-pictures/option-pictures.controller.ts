import {Controller, Post, Param, UseInterceptors, UploadedFiles, Res} from '@nestjs/common';
import { OptionPicturesService } from './option-pictures.service';
import {FilesInterceptor} from "@nestjs/platform-express";
import {uploadFileToStorage} from "../../firebase";

@Controller('option-pictures')
export class OptionPicturesController {
  constructor(private readonly optionPicturesService: OptionPicturesService) {}

  @Post(":optionId")
  @UseInterceptors(FilesInterceptor('pictures'))
  async create(@UploadedFiles() files: Array<Express.Multer.File>,@Param('optionId') optionId: string, @Res() res: Response) {
    try {
      console.log("optionId", optionId)
      console.log("files", files)
      let pictures: {
        icon: string,
        optionId: string
      }[] = []
      for(let file of files) {
        let url = await uploadFileToStorage(file, "products", file.buffer)
        pictures.push({
          optionId,
          icon: url ? url : "xxx.jpg"
        })
      }
      let [status, message, data] = await this.optionPicturesService.create(pictures);
      // @ts-ignore
      return res.status(status ? 200 : 213).json({
        message,
        data
      })
    }catch(err) {
      // @ts-ignore
      return res.status(500).json({
        message: "Controller error"
      })
    }
  }
}
