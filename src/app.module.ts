import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './modules/categories/categories.module';
import { GatewayModule } from './gateway/gateway.module';
import { ProductsModule } from './modules/products/products.module';
import { UsersModule } from './modules/users/users.module';
import { AuthenModule } from './modules/authen/authen.module';
import { ProductOptionsModule } from './modules/product-options/product-options.module';
import { OptionPicturesModule } from './modules/option-pictures/option-pictures.module';
import { ReceiptDetailModule } from './modules/receipt-detail/receipt-detail.module';
@Module({
  imports: [
    ConfigModule.forRoot(), // load env toàn hệ thống
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DBNAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true, // dev
    }),
    CategoriesModule,
    GatewayModule,
    ProductsModule, 
    UsersModule,
    AuthenModule,
    ProductOptionsModule,
    OptionPicturesModule,
    ReceiptDetailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
