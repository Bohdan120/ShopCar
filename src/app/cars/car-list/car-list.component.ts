import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CarModel } from '../../services/car';
import { CarServiceService } from '../../services/car.service.service';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule,MatCardModule, MatButtonModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
  cars: CarModel[] = [];

  constructor(private carService: CarServiceService) { }

  ngOnInit() {
    this.carService.getCars().subscribe(cars => this.cars = cars);
  }

}
