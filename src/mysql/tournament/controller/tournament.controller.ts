import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { ResourceSerialization } from 'src/common/serialization/resource.serialization';
import { TournamentService } from '../provider/tournament.service';

@UseInterceptors(ResourceSerialization)
@Controller('/tournaments')
export class TournamentController {
  constructor(private tournamentService: TournamentService) {}

  @Get(':tournamentId')
  findById(@Param('tournamentId') tournamentId) {
    return this.tournamentService.findById(tournamentId);
  }
}
