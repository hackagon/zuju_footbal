import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentController } from './controller/tournament.controller';
import { TournamentsController } from './controller/tournaments.controller';
import { TournamentService } from './provider/tournament.service';
import { TournamentsService } from './provider/tournaments.service';
import { TournamentEntity } from './tournament.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TournamentEntity])],
  providers: [TournamentService, TournamentsService],
  controllers: [TournamentController, TournamentsController],
})
export class TournamentModule {}
