import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { IPaginationParamteters, Pagination } from 'src/common/decorator/pagination.decorator';
import { CollectionSerialization } from 'src/common/serialization/collection.serialization';
import { GoalsService } from '../provider/goals.service';

@Controller('goals')
export class GoalsController {
  constructor(private goalsService: GoalsService) {}

  @UseInterceptors(CollectionSerialization)
  @Get()
  findMany(@Pagination() pagiParams: IPaginationParamteters) {
    return this.goalsService.findMany({ pagiParams });
  }
}
