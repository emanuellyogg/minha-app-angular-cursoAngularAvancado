import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tasks-adicionar',
  templateUrl: './tasks-adicionar.component.html',
  styles: []
})
export class TasksAdicionarComponent implements OnInit {

  taskNew: string;

  constructor() { }

  ngOnInit() {  
  }

  taskAdd() {
   console.log(this.taskNew);
     
  }

}
