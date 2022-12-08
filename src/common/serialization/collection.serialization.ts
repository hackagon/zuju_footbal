import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import _ from 'lodash';
import { formatResource } from '.';

@Injectable()
export class CollectionSerialization implements NestInterceptor {
  intercept(ctx: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      switchMap((response) => {
        if (!response) return of(response);
        return [this.serializeCollection(response)];
      }),
    );
  }

  serializeCollection(response) {
    return {
      ...response,
      data: _.map(response.data, (item) => formatResource(item)),
    };
  }
}
