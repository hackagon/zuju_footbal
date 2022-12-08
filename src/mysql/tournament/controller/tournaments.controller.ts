import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { IPaginationParamteters, Pagination } from 'src/common/decorator/pagination.decorator';
import { CollectionSerialization } from 'src/common/serialization/collection.serialization';
import { TournamentService } from '../provider/tournament.service';
import { TournamentsService } from '../provider/tournaments.service';

@Controller('tournaments')
export class TournamentsController {
  constructor(private tournamentsService: TournamentsService) {}

  @UseInterceptors(CollectionSerialization)
  @Get()
  findMany(@Pagination() pagiParams: IPaginationParamteters) {
    return this.tournamentsService.findMany({ pagiParams });
  }
}
