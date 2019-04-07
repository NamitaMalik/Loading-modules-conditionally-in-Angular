import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TasksComponent,
        children: [
          {
            path: '',
            component: TasksListComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TasksRoutingModule {}
