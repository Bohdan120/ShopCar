import { Routes } from '@angular/router';
import { CarListComponent } from './cars/car-list/car-list.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "cars", component: CarListComponent} 

];
