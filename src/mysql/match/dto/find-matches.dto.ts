import { IPaginationParamteters } from 'src/common/decorator/pagination.decorator';

export class FindMatchesDto {
  pagiParams: IPaginationParamteters;
  date?: string;
}
