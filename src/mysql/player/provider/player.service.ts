import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract/abstract.service';
import { Repository } from 'typeorm';
import { PlayerEntity } from '../player.entity';

@Injectable()
export class PlayerService extends AbstractService<PlayerEntity> {
  constructor(@InjectRepository(PlayerEntity) _repository: Repository<PlayerEntity>) {
    super(_repository);
  }
}
