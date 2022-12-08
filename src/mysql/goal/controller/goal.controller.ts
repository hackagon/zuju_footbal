import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { ResourceSerialization } from 'src/common/serialization/resource.serialization';
import { GoalService } from '../provider/goal.service';

@UseInterceptors(ResourceSerialization)
@Controller('/goals')
export class GoalController {
  constructor(private goalService: GoalService) {}

  @Get('/:goalId')
  findById(@Param('goalId') goalId: string) {
    return this.goalService.findById(goalId);
  }
}
