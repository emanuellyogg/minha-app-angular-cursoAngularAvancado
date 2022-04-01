import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from './todo.store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TasksService } from './todo.service';
import { TasksFinalizadasComponent } from './components/tasks-finalizadas/tasks-finalizadas.component';
import { TasksIniciadasComponent } from './components/tasks-iniciadas/tasks-iniciadas.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ToDoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './todo.component';
import { TasksAdicionarComponent } from './components/tasks-adicionar/tasks-adicionar.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    TasksService,
    Store
  ],
  declarations: [
    TodoComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent,
    ToDoListComponent,
    TasksComponent,
    TasksAdicionarComponent
  ],
  exports: [
    TodoComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent,
    TasksComponent,
    ToDoListComponent
  ]
})
export class TodoModule {}