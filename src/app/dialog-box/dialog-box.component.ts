import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [MatFormField, MatLabel, ReactiveFormsModule, FormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButton],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.css'
})
export class DialogBoxComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if (this.data) this.isNew = false;
  }

  myForm: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(this.data?.id ?? null),
    make: new UntypedFormControl(this.data?.make ?? ''),
    model: new UntypedFormControl(this.data?.model ?? ''),
    year: new UntypedFormControl(this.data?.year ?? ''),
    price: new UntypedFormControl(this.data?.price ?? ''),
    mileage: new UntypedFormControl(this.data?.mileage ?? ''),
    fuelType: new UntypedFormControl(this.data?.fuelType ?? ''),
    transmission: new UntypedFormControl(this.data?.transmission ?? ''),
    engine: new UntypedFormControl(this.data?.engine ?? ''),
    horsepower: new UntypedFormControl(this.data?.horsepower ?? ''),
  });

  isNew: boolean = true;

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onSubmit() {
    this.data = {
      id: this.myForm.value.id,
      make: this.myForm.value.make,
      model: this.myForm.value.model,
      year: this.myForm.value.year,
      price: this.myForm.value.price,
      mileage: this.myForm.value.price,
      fuelType: this.myForm.value.price,
      transmission: this.myForm.value.price,
      engine: this.myForm.value.engine,
      horsepower: this.myForm.value.horsepower,
      image: "assets/images/car.jpg",
     
      
    };

    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {

  }

}

