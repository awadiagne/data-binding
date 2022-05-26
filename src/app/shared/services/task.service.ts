import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export const TASKS = [
  { title: "Task 1", id: 9, status: "In Progress"},
  { title: "Task 2", id: 27, status: "To Do" },
  { title: "Task 3", id: 48, status: "In Progress" },
  { title: "Task 4", id: 33, status: "Done" },
  { title: "Task 5", id: 42, status: "To Do" }
];

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http : HttpClient ) { }

  getTask(id) : any{
    return this.http.get('https://jsonplaceholder.typicode.com/todos/:id');
  }

  getTasks() : any{
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  postTask(task : any){
    return this.http.post('https://jsonplaceholder.typicode.com/todos', task);
  }
}
