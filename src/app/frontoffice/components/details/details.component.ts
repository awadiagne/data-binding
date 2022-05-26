import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public todoID;
  public otherID;
  public task;

  constructor(private route : ActivatedRoute, private router: Router, 
    private _location : Location, private taskService : TaskService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const routeQuery = this.route.snapshot.queryParamMap;
    this.todoID = routeParams.get('todoID');
    this.task = this.taskService.getTasks().find(x => x.id == this.todoID);
    this.otherID = routeQuery.get('id');
  }

  gotoChat(){
    this.router.navigate(['/chat/']);
  }

  gotoBack(){
    
  }
}
