import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import _ from 'lodash';
import BBPromise from 'bluebird';
import { MatchEntity } from '../match.entity';
import { MatchEmbed } from '../provider/match.embed';
import { formatResource } from 'src/common/serialization';

@Injectable()
export class MatchesInterceptor implements NestInterceptor {
  constructor(private matchEmbed: MatchEmbed) {}

  intercept(ctx: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      switchMap(async (response) => {
        if (!response) return of(response);
        return await this.serializeResource(response);
      }),
    );
  }

  async serializeResource(response: any) {
    if (_.isArray(response.data)) {
      const data = await BBPromise.map(response.data, async (match: MatchEntity) => {
        await Promise.all([this.matchEmbed.embedGoals(match), this.matchEmbed.embedTeam(match)]);

        return formatResource(match);
      });

      _.set(response, 'data', data);
      return response;
    }
  }
}
