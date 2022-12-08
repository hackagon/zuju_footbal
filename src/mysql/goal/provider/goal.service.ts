import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract/abstract.service';
import { Repository } from 'typeorm';
import { GoalEntity } from '../goal.entity';

@Injectable()
export class GoalService extends AbstractService<GoalEntity> {
  constructor(@InjectRepository(GoalEntity) _repository: Repository<GoalEntity>) {
    super(_repository);
  }
}
