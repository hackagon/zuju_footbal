import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MysqlModule } from './mysql/mysql.module';

@Module({
  imports: [MysqlModule],
  controllers: [AppController],
})
export class AppModule {}
