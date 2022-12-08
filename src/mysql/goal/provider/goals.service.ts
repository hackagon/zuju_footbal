import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GoalEntity } from '../goal.entity';
import * as Dto from '../dto';
import { paginateRaw } from 'src/common/pagination';

@Injectable()
export class GoalsService {
  constructor(@InjectRepository(GoalEntity) private _repository: Repository<GoalEntity>) {}

  findMany(data: Dto.FindGoalsDto) {
    const { pagiParams } = data;
    return paginateRaw(this._repository.createQueryBuilder('goal').select(), pagiParams);
  }
}
