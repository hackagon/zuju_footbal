import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TournamentEntity } from '../tournament.entity';
import * as Dto from '../dto';
import { paginateRaw } from 'src/common/pagination';

@Injectable()
export class TournamentsService {
  constructor(
    @InjectRepository(TournamentEntity) private _repository: Repository<TournamentEntity>,
  ) {}

  findMany(data: Dto.FindTournamentsDto) {
    const { pagiParams } = data;
    return paginateRaw(this._repository.createQueryBuilder('tournament').select(), pagiParams);
  }
}
