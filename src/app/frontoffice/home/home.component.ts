import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  favoris = [
    {
      title : "Mon Menu",
      description : "Mon menu projet de suite"
    },
    {
      title : "My Kanban Board",
      description : "Mon menu projet de suite"
    }
  ];

  consultes = [
    {
      title : "Backlog",
      description : "Mon menu projet de suite"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
