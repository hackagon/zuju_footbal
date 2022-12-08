import { Injectable } from '@nestjs/common';
import _ from 'lodash';
import { formatResource } from 'src/common/serialization';
import { GoalEntity } from 'src/mysql/goal/goal.entity';
import { TeamEntity } from 'src/mysql/team/team.entity';
import { Connection } from 'typeorm';
import { MatchEntity } from '../match.entity';

@Injectable()
export class MatchEmbed {
  constructor(private connection: Connection) {}

  async embedGoals(match: MatchEntity) {
    const goals = await this.connection.getRepository(GoalEntity).find({ matchId: match.id });
    _.set(match, 'relationships.goals', _.map(goals, formatResource));
  }

  async embedTeam(match: MatchEntity) {
    const homeTeam = await this.connection.getRepository(TeamEntity).findOne(match.homeTeamId);
    const awayTeam = await this.connection.getRepository(TeamEntity).findOne(match.awayTeamId);
    _.set(match, 'relationships.homeTeam', formatResource(homeTeam));
    _.set(match, 'relationships.awayTeam', formatResource(awayTeam));
  }
}
