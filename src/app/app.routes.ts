import { Routes } from '@angular/router';
import { CarListComponent } from './cars/car-list/car-list.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "cars", component: CarListComponent},
    {path: "mail", component: ContactComponent}, 


];
