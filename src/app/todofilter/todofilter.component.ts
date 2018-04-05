import { Component, OnInit, Input } from '@angular/core';
import { TodofilterService } from '../todofilter.service'
import { TodoService } from '../todo.service'
import { TodoFilter,Todo } from '../Todo'
@Component({
  selector: 'app-todofilter',
  templateUrl: './todofilter.component.html',
  styleUrls: ['./todofilter.component.css']
})
export class TodofilterComponent implements OnInit {
  @Input() todoList 
  state = [
    "全部","已完成","未完成"
  ]
  constructor(
    private todofilterService: TodofilterService,
    private todoService: TodoService
  ) { }

  ngOnInit() {
  }
  changeState(state){
    let value
    switch (state.innerHTML) {
      case '全部':
        value = TodoFilter.ALL
        break;
      case '已完成':
        value = TodoFilter.Complete
        break;
      case '未完成':
        value = TodoFilter.Uncomplete
        break;  
      default:
      value = TodoFilter.ALL
        break;
    }
    this.todofilterService.changeState(value)
    .subscribe(({data}) =>{
      this.todoList = data;
    })
  }
}
