import { PartialType } from '@nestjs/mapped-types';
import { CreateReceiptDetailDto } from './create-receipt-detail.dto';

export class UpdateReceiptDetailDto extends PartialType(CreateReceiptDetailDto) {}
