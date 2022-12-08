import { IsDateString, IsNotEmpty } from 'class-validator';

export class FindByCalendarDto {
  @IsNotEmpty()
  @IsDateString()
  fromDate: string;

  @IsNotEmpty()
  @IsDateString()
  toDate: string;
}
