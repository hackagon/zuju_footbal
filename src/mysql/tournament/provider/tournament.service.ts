import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract/abstract.service';
import { Repository } from 'typeorm';
import { TournamentEntity } from '../tournament.entity';

@Injectable()
export class TournamentService extends AbstractService<TournamentEntity> {
  constructor(@InjectRepository(TournamentEntity) _repository: Repository<TournamentEntity>) {
    super(_repository);
  }
}
