import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoalController } from './controller/goal.controller';
import { GoalsController } from './controller/goals.controller';
import { GoalService } from './provider/goal.service';
import { GoalsService } from './provider/goals.service';
import { GoalEntity } from './goal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GoalEntity])],
  providers: [GoalService, GoalsService],
  controllers: [GoalController, GoalsController],
})
export class GoalModule {}
