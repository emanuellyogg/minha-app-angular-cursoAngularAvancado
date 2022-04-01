import { FormGroup, FormBuilder } from '@angular/forms';
import { Task } from './../../task';
import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../todo.service';

@Component({
  selector: 'tasks-adicionar',
  templateUrl: './tasks-adicionar.component.html',
  styles: []
})
export class TasksAdicionarComponent implements OnInit {

  taskForm: FormGroup;
  tarefa: Task;

  constructor(private tasksService: TasksService, private fb: FormBuilder) { }

  taskAdd() {
    if (this.taskForm.dirty && this.taskForm.valid) {
      this.tarefa = Object.assign({}, this.tarefa, this.taskForm.value);

      this.tasksService.adicionarNova(this.tarefa);
      this.taskForm.reset();
    }
  }

  ngOnInit() {
    this.taskForm = this.fb.group({
      nome: ['']
    })
  }

}
