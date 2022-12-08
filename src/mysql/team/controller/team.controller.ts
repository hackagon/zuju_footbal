import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { ResourceSerialization } from 'src/common/serialization/resource.serialization';
import { TeamService } from '../provider/team.service';

@UseInterceptors(ResourceSerialization)
@Controller('/teams')
export class TeamController {
  constructor(private teamService: TeamService) {}

  @Get('/:teamId')
  findById(@Param('teamId') teamId: string) {
    return this.teamService.findById(teamId);
  }
}
