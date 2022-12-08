import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract/abstract.service';
import { Repository } from 'typeorm';
import { MatchEntity } from '../match.entity';

@Injectable()
export class MatchService extends AbstractService<MatchEntity> {
  constructor(@InjectRepository(MatchEntity) _repository: Repository<MatchEntity>) {
    super(_repository);
  }
}
