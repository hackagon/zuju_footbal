import { Column, Entity } from 'typeorm';
import { AbstractEntityUuId } from 'src/common/abstract/abstract.entity';

@Entity({ name: 'team' })
export class TeamEntity extends AbstractEntityUuId<TeamEntity> {
  @Column({ length: 255 })
  name: string;

  @Column({ length: 255, nullable: true })
  logoUrl: string;
}
