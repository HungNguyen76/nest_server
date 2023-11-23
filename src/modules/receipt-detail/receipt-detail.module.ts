import { Module } from '@nestjs/common';
import { ReceiptDetailService } from './receipt-detail.service';
import { ReceiptDetailController } from './receipt-detail.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ReceiptDetail} from "./entities/receipt-detail.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ReceiptDetail])
  ],
  controllers: [ReceiptDetailController],
  providers: [ReceiptDetailService],
})
export class ReceiptDetailModule {}
