import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TasksModule, 
    AuthModule, 
    ProjectsModule, UsersModule, 
  ],
  
})
export class AppModule { }
