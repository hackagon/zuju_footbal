import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import _ from 'lodash';

export interface IIdentity {
  userId: string;
  token: string;
}

export const Identity = createParamDecorator(
  (data: string, ctx: ExecutionContext): IIdentity => {
    const request: Request = ctx.switchToHttp().getRequest();
    const identity = {
      token: _.get(request, 'token'),
      userId: _.get(request, 'user.id'),
    };

    return data ? identity[data] : identity;
  },
);
