import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller()
export class TasksController {


  constructor(
    private taskService : TasksService
  ) {
  }

  @Get('/tasks')
  getAllTasks(){
    return this.taskService.getTasks();
  }
}
