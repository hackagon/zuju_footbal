import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { IPaginationParamteters, Pagination } from 'src/common/decorator/pagination.decorator';
import { CollectionSerialization } from 'src/common/serialization/collection.serialization';
import { PlayersService } from '../provider/players.service';

@Controller('players')
export class PlayersController {
  constructor(private playersService: PlayersService) {}

  @UseInterceptors(CollectionSerialization)
  @Get()
  findMany(@Pagination() pagiParams: IPaginationParamteters) {
    return this.playersService.findMany({ pagiParams });
  }
}
