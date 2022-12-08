import { JsonApiResource } from './serializer.interface';
import _ from 'lodash';

export const formatResource = (response: any): JsonApiResource => {
  return {
    id: response.id,
    entity: _.get(response, 'entity', 'Custom'),
    attributes: _.omit(response, [
      'id',
      'entity',
      'password',
      'relationships',
      'createdAt',
      'updatedAt',
    ]),
    meta: {
      createdAt: response.createdAt,
      updatedAt: response.updatedAt,
    },
    relationships: _.get(response, 'relationships', {}),
  };
};
