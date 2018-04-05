import { NgModule } from '@angular/core';
import { NewComponentComponent } from './new-component/new-component.component'
import { TodoService } from './todo.service'
@NgModule({
  declarations: [
    NewComponentComponent
  ],

  providers:[
    TodoService
  ],
  exports:[
    NewComponentComponent
  ]
})
export class NewmoduleModule { }
