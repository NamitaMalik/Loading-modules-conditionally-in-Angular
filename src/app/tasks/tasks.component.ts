import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  constructor(private router: Router) {
  }

  private tasks = [
    {id: '1', title: 'Code Cleanup'},
    {id: '2', title: 'Review Code'},
    {id: '3', title: 'Build to Prod'}
  ];
  private errorMessage:any = '';

  onSelect(task) {
    this.router.navigate(['/tasks', task.id]);
  }

}
