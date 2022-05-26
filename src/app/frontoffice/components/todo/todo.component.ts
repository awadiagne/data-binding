import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  tasks;
  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      res => { this.tasks = res },
      error => { console.log(error) } );
  }
  title = "TODO";
  taskTitle = "";
  taskStatus = "";
  statusSelected = null;

  deleteTask(taskId: number) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    this.tasks.splice(taskIndex, 1);
  }

  addTask() {
    const lastIndex = this.tasks.length - 1;
    const id = this.tasks[lastIndex].id + 1;
    this.tasks.push({ title: this.taskTitle,  id, status: this.taskStatus });
    this.taskTitle = "";
  }

  filterTask() {
    if(this.statusSelected === null) {
      return this.tasks;
    }
    return this.tasks.filter((task) => this.statusSelected === task.status);
  } 
}
