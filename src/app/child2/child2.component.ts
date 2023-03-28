import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
@Output() messageEmitter = new EventEmitter<string>();
sendMessage()
{
  this.messageEmitter.emit('Hello from child2');
}
}
