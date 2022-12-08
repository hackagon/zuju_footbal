import { NotFoundException } from '@nestjs/common';
import _ from 'lodash';
import { DeepPartial, Repository, ObjectLiteral } from 'typeorm';

export interface IAbstractService<E> {
  findById(id: number | string): Promise<E>;

  create(doc: DeepPartial<E>): Promise<E>;

  deleteById(id: string): Promise<any>;
}

export abstract class AbstractService<Entity extends ObjectLiteral>
  implements IAbstractService<Entity> {
  protected readonly _repository: Repository<Entity>;

  protected constructor(baseRepository: Repository<Entity>) {
    this._repository = baseRepository;
  }

  public async findById(id: number | string): Promise<Entity> {
    const foundInstance = await this._repository.findOne(id);
    if (!foundInstance) throw new NotFoundException('Instance not found');
    return foundInstance;
  }

  public async create(doc: DeepPartial<Entity>): Promise<Entity> {
    const instance = this._repository.create(doc);
    return instance.save();
  }

  public async deleteById(id: number | string): Promise<any> {
    const foundInstance = await this.findById(id);
    await this._repository.remove(foundInstance);
    return {
      message: `Instance with id ${id} has been deleted`,
    };
  }

  public async updateById(id: number | string, doc: DeepPartial<Entity>): Promise<any> {
    const foundInstance = await this.findById(id);
    _.keys(doc).forEach((key) => {
      _.set(foundInstance, key, doc[key]);
    });

    return await foundInstance.save();
  }
}
