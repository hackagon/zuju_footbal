import {
  AfterLoad,
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  AfterInsert,
  AfterUpdate,
} from 'typeorm';
import _ from 'lodash';

export abstract class AbstractEntity<Entity> extends BaseEntity {
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  constructor(partial?: Partial<Entity>) {
    super();
    if (partial) Object.assign(this, partial);
  }

  @AfterLoad()
  @AfterInsert()
  @AfterUpdate()
  embedEntity() {
    _.set(this, 'entity', this.constructor.name);
  }
}

export abstract class AbstractEntityUuId<Entity> extends AbstractEntity<Entity> {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}

export abstract class AbstractEntityIntId<Entity> extends AbstractEntity<Entity> {
  @PrimaryGeneratedColumn()
  id: number;
}
