import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksComponent} from './tasks.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksRoutingModule } from './task-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule
  ],
  declarations: [
    TasksComponent,
    TasksListComponent
  ]
})
export class TasksModule {
}
