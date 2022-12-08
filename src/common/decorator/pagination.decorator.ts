import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import _ from 'lodash';

export interface IPaginationParamteters {
  limit: number;
  page: number;
  route: string;
}

export const Pagination = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): IPaginationParamteters => {
    const request: Request = ctx.switchToHttp().getRequest();

    const limit = _.get(request, 'query.limit', 20);
    const page = _.get(request, 'query.page', 1);
    const route = request.originalUrl;

    return { limit, page, route };
  },
);
