import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddtodoComponent } from './addtodo/addtodo.component';

export const routes: Routes = [
  {
    path: '',
    component:NavbarComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch:"full"
      },
      {
        path: 'addtodo',
        component: AddtodoComponent,
        pathMatch:"full"
      },
    ],
  },
];
