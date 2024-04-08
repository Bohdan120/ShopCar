import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CarModel } from '../../services/car';
import { CarServiceService } from '../../services/car.service.service';
import { Subscription } from 'rxjs';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenu } from '@angular/material/menu';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBoxComponent } from '../../dialog-box/dialog-box.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { CartService } from '../../services/cart.service';


import { MatMenuModule } from '@angular/material/menu';
import { MatMenuItem } from '@angular/material/menu';
import { MatMenuContent } from '@angular/material/menu';


@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule,MatCardModule, MatButtonModule, MatFormField, MatLabel, MatSelectModule, MatMenu, MatMenuTrigger, MatMenuModule, MatMenuItem, MatMenuContent, MatIcon],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})



export class CarListComponent {
  cars: CarModel[] = [];
  sortedCars: CarModel[] = [];
  carsSubscription!: Subscription;
  numCars: number = 5;
  sortDirection: 'asc' | 'desc' = 'asc'; 
  
  

  canEdit: boolean = false;
  canView: boolean = false;

  constructor(private carService: CarServiceService, public dialog: MatDialog, private cartService: CartService) { }

  ngOnInit() {
    this.canEdit = true;

    this.carsSubscription = this.carService.getCars().subscribe((data) => {
      this.cars = data;
      this.sortCars();     
    });
  }

  addToCart(car: CarModel) {
    this.cartService.addToCart(car);
  }

  openDialog(car?: CarModel): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.disableClose = true;
    dialogConfig.data = car;

    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        if (data && data.id)
          this.updateData(data);
        else
          this.postData(data);
      }

    });
  };

  sortCars() {
    this.sortedCars = [...this.cars]; 
    this.sortedCars.sort((a, b) => {
      if (this.sortDirection === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  postData(data: CarModel) {
    this.carService.postCar(data).subscribe((data) => this.cars.push(data));
  }

  updateData(product: CarModel) {
    this.carService.updateCar(product).subscribe((data) => {
      this.cars = this.cars.map((product) => {
        if (product.id === data.id) return data;
        else return product;
      });
    });

  }

  deleteItem(id: number) {
    this.carService.deleteCar(id).subscribe(() => {
      let idx = this.cars.findIndex((item) => id === item.id);
      this.cars.splice(idx, 1);
    });
  }


  ngOnDestroy() {
    if (this.carsSubscription) this.carsSubscription.unsubscribe();
  }
}