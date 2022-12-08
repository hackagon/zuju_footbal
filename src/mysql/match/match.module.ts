import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchController } from './controller/match.controller';
import { MatchesController } from './controller/matches.controller';
import { MatchService } from './provider/match.service';
import { MatchesService } from './provider/matches.service';
import { MatchEntity } from './match.entity';
import { MatchEmbed } from './provider/match.embed';

@Module({
  imports: [TypeOrmModule.forFeature([MatchEntity])],
  providers: [MatchService, MatchesService, MatchEmbed],
  controllers: [MatchesController, MatchController],
})
export class MatchModule {}
