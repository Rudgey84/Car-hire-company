import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Vehicle } from '../vehicle.interface';
import { VehicleType } from '../vehicle-type.interface';
import { VehicleService } from '../vehicle.mock.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addvehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css'],
})
export class AddvehicleComponent implements OnInit {
  readonly add_form: FormGroup;
  public vehicles: Vehicle[];
  public vehicleType: VehicleType[];

  constructor(
    private vehicleService: VehicleService,
    fb: FormBuilder,
    private location: Location
  ) {
    this.add_form = fb.group({
      regno: [null, Validators.required],
      vehicleType: [null, Validators.required],
      name: [null, Validators.required],
      price: [null, Validators.required],
      mileage: [null, Validators.required],
      description: [null, Validators.required],
      fuelType: [null, Validators.required],
      model: [null, Validators.required],
      noPassengers: [null, Validators.required]
    });
  }

  public add(): void {
    const {
      mileage,
      name,
      price,
      regno,
      vehicleType,
      fuelType,
      description,
      model,
      noPassengers
    } = this.add_form.value;
    
    let noWheels;
    if (vehicleType.type === 'Motorbike') {
      noWheels = 2;
    } else {
      noWheels = 4;
    }

    this.vehicleService
      .addVehicle({
        mileage: mileage,
        name: name,
        price: price,
        regno: regno,
        vehicleType: vehicleType.type,
        fuelType: fuelType,
        description: description,
        model: model,
        noWheels: noWheels,
        noPassengers: noPassengers
      } as Vehicle)
      .subscribe((v) => this.vehicles.push(v));
    setTimeout(() => {
      this.goBack();
    }, 1000);
  }

  private goBack(): void {
    this.location.back();
  }

  public ngOnInit(): void {
    this.getVehicles();
    this.getVehicleTypes();
  }

  private getVehicleTypes() {
    this.vehicleService
      .getVehicleTypes()
      .subscribe((vehicleType) => (this.vehicleType = vehicleType));
  }

  private getVehicles(): void {
    this.vehicleService
      .getVehicles()
      .subscribe((v) => (this.vehicles = v));
  }
}
