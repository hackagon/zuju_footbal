import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { ResourceSerialization } from 'src/common/serialization/resource.serialization';
import { PlayerService } from '../provider/player.service';

@UseInterceptors(ResourceSerialization)
@Controller('/players')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @Get('/:playerId')
  findById(@Param('playerId') playerId: string) {
    return this.playerService.findById(playerId);
  }
}
