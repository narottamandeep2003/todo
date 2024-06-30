import { Component } from '@angular/core';
import { TodocardComponent } from '../todocard/todocard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodocardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
