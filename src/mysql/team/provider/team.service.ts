import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract/abstract.service';
import { Repository } from 'typeorm';
import { TeamEntity } from '../team.entity';

@Injectable()
export class TeamService extends AbstractService<TeamEntity> {
  constructor(@InjectRepository(TeamEntity) _repository: Repository<TeamEntity>) {
    super(_repository);
  }
}
