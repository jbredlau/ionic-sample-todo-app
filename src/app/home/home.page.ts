import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {TabsPage} from '../tabs/tabs.page';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

    todos: string[] = [];
    todo: string;
    todoCount: number;

    constructor(private dataService: DataService) {}

    addTodo() {
        if (this.todo) {
            this.todos.push(this.todo);
        }
        this.todo = '';
        this.updateData();
    }

    deleteTodo(item) {
         let index = this.todos.indexOf(item, 0);
         if (index > -1 ) {
             this.todos.splice(index, 1);
         }
         this.updateData()
    }

    updateData() {
        this.todoCount = this.todos.length;
        this.dataService.setDataInObservable(this.todoCount);
    }



}
