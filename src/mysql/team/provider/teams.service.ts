import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeamEntity } from '../team.entity';
import * as Dto from '../dto';
import { paginateRaw } from 'src/common/pagination';

@Injectable()
export class TeamsService {
  constructor(@InjectRepository(TeamEntity) private _repository: Repository<TeamEntity>) {}

  findMany(data: Dto.FindTeamsDto) {
    const { pagiParams } = data;
    return paginateRaw(this._repository.createQueryBuilder('team').select(), pagiParams);
  }
}
