import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface taskType{

  id:Number;
  title:String;
  Done:boolean;
}

@Component({  
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,  CommonModule],
  // templateUrl: './app.component.html',
  template:`

  <h3>{{title}}</h3>

  <input type="text" [value]="name" [(ngModel)]="name">

  <h4>{{name}}</h4>
  <h3>Conditional Rendering</h3>
  <p *ngIf="empty">P Showed</p>
  @if(empty){
    <p>2nd P Showed</p>
  }

  <h3>Looping</h3>
  <ul>
    <li *ngFor="let i of [1,2,3]">{{i}}</li>
  </ul>
  @for(j of [4,5,6]; track $index ; let f = $first ;let l = $last; let even = $even; let odd = $odd){
    <li>{{j}} - {{$index}} - {{f}} - {{l}} - {{even}} - {{odd}}</li>
  }
  

    @for(task of tasks ;track task.id){
      
      <!-- <h3><span class="status-circle" [class.done]="task.Done"></span> {{task.id}} - {{task.title}}</h3> -->
      <h3><span class="status-circle" [ngClass]="{done:task.Done, 'str':task.Done}"></span> {{task.id}} - {{task.title}}</h3>
      <br>
    }
  
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practice';
  name = "Ak";
  empty = true;

  tasks:taskType[]=[
    {
      id:1,
      title:"Task 1",
      Done:false,
    },
    {
      id:2,
      title:"Task 2",
      Done:true
    },
    {
      id:3,
      title:"Task 3",
      Done:false
    },
    {
      id:4,
      title:"Task 4",
      Done:true
    }
  ]


}
