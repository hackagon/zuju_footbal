import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MatchEntity } from '../match.entity';
import * as Dto from '../dto';
import { paginateRaw } from 'src/common/pagination';
import _ from 'lodash';
import moment from 'moment';

@Injectable()
export class MatchesService {
  constructor(@InjectRepository(MatchEntity) private _repository: Repository<MatchEntity>) {}

  /**
   *
   * @data including date and pagiParams
   * @returns list of matches following JSON:API specification
   */
  findMany(data: Dto.FindMatchesDto) {
    const { pagiParams, date } = data;

    if (date)
      return paginateRaw(
        this._repository.createQueryBuilder('match').select().where({ date }).orderBy({
          date: 'ASC',
          time: 'ASC',
        }),
        pagiParams,
      );

    return paginateRaw(
      this._repository.createQueryBuilder('match').select().orderBy({
        date: 'ASC',
        time: 'ASC',
      }),
      pagiParams,
    );
  }

  /**
   *
   * @data  including fromDate and toDate
   * @returns list of dates (which have matches) following JSON:API specificatiion
   */
  async findByCalendar(data: Dto.FindByCalendarDto) {
    const { fromDate, toDate } = data;
    const fommattedFromDate = moment(fromDate).format('YYYY-MM-DD');
    const fommattedToDate = moment(toDate).format('YYYY-MM-DD');
    if (fommattedFromDate > fommattedToDate)
      throw new BadRequestException('fromDate must be less than or equal toDate');

    const matches = await this._repository
      .createQueryBuilder('match')
      .select()
      .where('date >= :fommattedFromDate', { fommattedFromDate })
      .andWhere('date <= :fommattedToDate', { fommattedToDate })
      .orderBy({
        date: 'ASC',
        time: 'ASC',
      })
      .getMany();

    const response = _.chain(matches)
      .map((match) => {
        return _.pick(match, ['date', 'time', 'duration']);
      })
      .value();

    return { data: response };
  }
}
