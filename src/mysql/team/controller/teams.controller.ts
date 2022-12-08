import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { IPaginationParamteters, Pagination } from 'src/common/decorator/pagination.decorator';
import { CollectionSerialization } from 'src/common/serialization/collection.serialization';
import { TeamsService } from '../provider/teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @UseInterceptors(CollectionSerialization)
  @Get()
  findMany(@Pagination() pagiParams: IPaginationParamteters) {
    return this.teamsService.findMany({ pagiParams });
  }
}
