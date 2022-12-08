import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormConfigs from 'src/config/typeorm.config';
import { GoalModule } from './goal/goal.module';
import { MatchModule } from './match/match.module';
import { PlayerModule } from './player/player.module';
import { TeamModule } from './team/team.module';
import { TournamentModule } from './tournament/tournament.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfigs),

    // modules
    TournamentModule,
    TeamModule,
    PlayerModule,
    MatchModule,
    GoalModule,
  ],
})
export class MysqlModule {}
