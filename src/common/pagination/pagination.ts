import { IPaginationLinks, IPaginationMeta, ObjectLiteral } from './interfaces';

export class Pagination<PaginationObject, T extends ObjectLiteral = IPaginationMeta> {
  constructor(
    public readonly meta: T,
    public readonly links?: IPaginationLinks,
    public readonly data?: PaginationObject[],
  ) {}
}
