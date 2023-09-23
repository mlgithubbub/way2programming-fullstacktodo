import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { HttpService } from './services/http.service';
import  { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'todo-fullstack';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  todoForm!: FormGroup;
  todos: Todo[] = [];

  constructor(private _snackBar: MatSnackBar, 
    private formBuilder: FormBuilder,
    private httpService: HttpService
    ) {}

  ngOnInit(): void{
    this.todoForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      description: [''],
      completed: [''],
    });
    this.getTodo();
  }

  openSnackBar(){
    this._snackBar.open('Test', 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
    });
  }


  getTodo() {
    this.httpService.getTodo().subscribe((data) => {
      this.todos = data;
    });
  }

  onSubmit(){
    if (this.todoForm.invalid) {
      return;
    }
    const formValue: Todo = this.todoForm.value;
    const todoRequest: Todo = {
      completed: false,
      description: formValue?.description,
      name: formValue?.name,
    };
    this.httpService.createTodo(todoRequest).subscribe((data) => {});
  }

}
