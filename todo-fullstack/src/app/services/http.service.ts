import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  todoApi = "/api/todos";

  constructor(private httpClient: HttpClient) { }

  createTodo(todo: Todo): Observable<Todo>{
    return this.httpClient.post<Todo>(this.todoApi, todo);
  }

  getTodo(): Observable<Todo[]> {
    return this.httpClient.get<TodoGetResponse>(this.todoApi).pipe(
      map((data) => {
        return data._embedded.todos;
      })
    );
  }
}

interface TodoGetResponse {
    _embedded: {
      todos: Todo[];
    };
}




