import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { ResourceSerialization } from 'src/common/serialization/resource.serialization';
import { MatchService } from '../provider/match.service';

@UseInterceptors(ResourceSerialization)
@Controller('/matches')
export class MatchController {
  constructor(private matchService: MatchService) {}

  @Get('/:matchId')
  findById(@Param('matchId') matchId: string) {
    return this.matchService.findById(matchId);
  }
}
