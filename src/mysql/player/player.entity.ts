import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AbstractEntityUuId } from 'src/common/abstract/abstract.entity';
import { TeamEntity } from '../team/team.entity';

@Entity({ name: 'player' })
export class PlayerEntity extends AbstractEntityUuId<PlayerEntity> {
  @ManyToOne(() => TeamEntity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'team_id' })
  @Column({ length: 36 })
  teamId: string;

  @Column({ length: 36 })
  firstName: string;

  @Column({ length: 36 })
  lastName: string;

  @Column({ length: 5 })
  squadNumber: string;
}
