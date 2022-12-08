import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerController } from './controller/player.controller';
import { PlayersController } from './controller/players.controller';
import { PlayerService } from './provider/player.service';
import { PlayersService } from './provider/players.service';
import { PlayerEntity } from './player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlayerEntity])],
  providers: [PlayerService, PlayersService],
  controllers: [PlayerController, PlayersController],
})
export class PlayerModule {}
