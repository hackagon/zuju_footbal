import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { IPaginationParamteters, Pagination } from 'src/common/decorator/pagination.decorator';
import { CollectionSerialization } from 'src/common/serialization/collection.serialization';
import { MatchesInterceptor } from '../interceptor/matches.interceptor';
import { MatchesService } from '../provider/matches.service';
import * as Dto from '../dto';

@Controller('/matches')
export class MatchesController {
  constructor(private matchesService: MatchesService) {}

  /**
   *
   * @param pagiParams (optional) for pagination (including page, limit, route)
   * @param date (optional) for query matches on a specific date
   * @returns list of matches following JSON:API specification
   */
  @UseInterceptors(MatchesInterceptor)
  @Get()
  findMany(@Pagination() pagiParams: IPaginationParamteters, @Query('date') date?: string) {
    return this.matchesService.findMany({ pagiParams, date });
  }

  /**
   *
   * @param query (required) including startDate & toDate
   * @returns list of dates (which have matches) following JSON:API specificatiion
   */
  @UseInterceptors(CollectionSerialization)
  @Get('/_calendar_')
  findByCalendar(@Query() query: Dto.FindByCalendarDto) {
    return this.matchesService.findByCalendar(query);
  }
}
