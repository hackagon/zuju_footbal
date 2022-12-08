import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamController } from './controller/team.controller';
import { TeamsController } from './controller/teams.controller';
import { TeamService } from './provider/team.service';
import { TeamsService } from './provider/teams.service';
import { TeamEntity } from './team.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeamEntity])],
  providers: [TeamService, TeamsService],
  controllers: [TeamController, TeamsController],
})
export class TeamModule {}
