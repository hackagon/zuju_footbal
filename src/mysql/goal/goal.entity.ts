import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AbstractEntityUuId } from 'src/common/abstract/abstract.entity';
import { PlayerEntity } from '../player/player.entity';
import { MatchEntity } from '../match/match.entity';

@Entity({ name: 'goal' })
export class GoalEntity extends AbstractEntityUuId<GoalEntity> {
  @ManyToOne(() => MatchEntity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'match_id' })
  @Column({ length: 36 })
  matchId: string;

  @ManyToOne(() => PlayerEntity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'player_id' })
  @Column({ length: 36 })
  playerId: string;

  @Column()
  minute: number;
}
