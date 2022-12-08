import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AbstractEntityUuId } from 'src/common/abstract/abstract.entity';
import { TeamEntity } from '../team/team.entity';
import { EMatchDuration } from 'src/interfaces';

@Entity({ name: 'match' })
export class MatchEntity extends AbstractEntityUuId<MatchEntity> {
  @ManyToOne(() => TeamEntity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'home_team_id' })
  @Column({ length: 255 })
  homeTeamId: string;

  @ManyToOne(() => TeamEntity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'away_team_id' })
  @Column({ length: 255 })
  awayTeamId: string;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'time' })
  time: Date;

  @Column({ type: 'char', length: '10', nullable: true })
  duration: EMatchDuration;
}
