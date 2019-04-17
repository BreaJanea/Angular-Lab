import { Component } from '@angular/core';
import { SafeMethodCall } from '@angular/compiler';

interface Item  {
  newTodo: string;
  todos: any;
  todoObj: any;
  Todo: any;
  completed: boolean;
  deleteTodo: string;

}

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    filterInput: string;
    newTodo: string;
    Todo: any;
    todos: any;
    nameInput: string;
    completed: boolean;
    deleteTodo: string;

    
    Todos: Todo [] = [
      {name: 'walk the dog' completed: false},
      {name: 'wash the car', completed: false}
    ];
    filterTodo = [...this.todos];

    // constructor(){
    //   this.newTodo = '';
    //   this.todos = [];
    // }
   
    addTodo = () => {
     const newTodo = {
       name: this.nameInput,
       completed: false
     }
      }
      this.todos.push(this.newTodos);
      this.newTodo = '';
      event.preventDefault();
    };
    
    deleteTodo = item = {
     const index=this.todos.infexOf(item);
     this.todos.splice(index,1)
     this.addTodo.filterTodos()

    }

   




    // todoList: Item[]


  //   addtodoList = () => {
  //     const newTask= {
  //     name: this.nameInput,
      
  //   };
  //   this.todoList.push(newTask);
  //   this.nameInput = null;
  

  // }


