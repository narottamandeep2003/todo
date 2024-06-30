import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment } from './counter.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private store=inject(Store)
  title = 'todo';
  count$:Observable<number>;
  constructor(){
    this.count$=this.store.select('counter')
  }
  inc=(a:number)=>{
    this.store.dispatch(increment({ value: 5 }))
  }
}
