import { Store } from './todo.store';
import { TasksService } from './todo.service';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, Observer } from 'rxjs';
import { Task } from './task';

const todoList: Task[] = [
  {
    "id": 1,
    "nome": "Responder e-mail",
    "finalizado": true,
    "iniciado": false
  }
];

function createResponse(body) {
  return Observable.create((observer: Observer<any>) => {
    observer.next(body);
  });
}

class MockHttp {
  get() {
    return createResponse(todoList);
  }
}

describe('TaskService', () => {
  let service: TasksService;
  let http: HttpClient;
  
  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useClass: MockHttp },
        TasksService,
        Store
      ]
    });
    http = bed.get(HttpClient);
    service = bed.get(TasksService);
  }); 

  it('Deve retornar lista de tarefas', () =>{
    spyOn(http, 'get').and.returnValue(createResponse(todoList));
  
    service.getTodoList$
    .subscribe((result) => {
      expect(result.length).toBe(1);
      console.log(result);
      console.log(todoList);
  
      expect(result).toEqual(todoList);
    });
  });
});



