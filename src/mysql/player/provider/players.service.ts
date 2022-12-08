import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlayerEntity } from '../player.entity';
import * as Dto from '../dto';
import { paginateRaw } from 'src/common/pagination';

@Injectable()
export class PlayersService {
  constructor(@InjectRepository(PlayerEntity) private _repository: Repository<PlayerEntity>) {}

  findMany(data: Dto.FindPlayersDto) {
    const { pagiParams } = data;
    return paginateRaw(this._repository.createQueryBuilder('player').select(), pagiParams);
  }
}
