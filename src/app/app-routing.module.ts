import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo: '/tasks', pathMatch: 'full'},
      {path: 'tasks', loadChildren: './tasks/tasks.module#TasksModule'},
      {path: 'users', loadChildren: './users/users.module#UsersModule'}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
