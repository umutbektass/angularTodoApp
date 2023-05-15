import { Component } from '@angular/core';
import { Model, TodoList } from 'src/app/model';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent {
  model = new Model()
  isDisplay= false;
  getItems(){
    if(this.isDisplay==true){
      return this.model.items;
    }
    return this.model.items.filter(item=>item.action!==true);
  }

  addItem(value:any){
    if(value!=""){
    this.model.items.push(new TodoList(value,false))
  }
  }
}
