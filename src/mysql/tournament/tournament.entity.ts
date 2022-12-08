import { Column, Entity } from 'typeorm';
import { AbstractEntityUuId } from 'src/common/abstract/abstract.entity';

@Entity({ name: 'tournament' })
export class TournamentEntity extends AbstractEntityUuId<TournamentEntity> {
  @Column({ name: 'name', length: 255 })
  name: string;
}
