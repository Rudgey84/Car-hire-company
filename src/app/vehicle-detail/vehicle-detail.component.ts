import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Vehicle } from '../vehicle.interface';
import { VehicleService } from '../vehicle.mock.service';

import { Customer } from '../customer.interface';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css'],
})
export class VehicleDetailComponent implements OnInit {
  public hire_form: FormGroup;
  public vehicle: Vehicle;
  public customer: Customer[];
  constructor(
    readonly activatedRoute: ActivatedRoute,
    readonly vehicleService: VehicleService,
    readonly location: Location,
    readonly fb: FormBuilder
  ) {
    this.hire_form = fb.group({
      customerSelect: [null, Validators.required],
    });
  }

  public goBack(): void {
    this.location.back();
  }

  public hire(): void {
    const bookedOut = true;
    this.vehicle.bookedOut = bookedOut;
    this.vehicle.assignedTo = this.hire_form.value.customerSelect.id

    this.vehicleService.updateVehicle(this.vehicle).subscribe((_resp) => {
      this.goBack();
    });
  }

  public ngOnInit() {
    this.getVehicle();
    this.getCustomer();
  }

  private getVehicle(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.vehicleService
      .getVehicle(id)
      .subscribe((vehicle) => (this.vehicle = vehicle));
  }

  private getCustomer(): void {
    this.vehicleService.getCustomers().subscribe((customer: Customer[]) => {
      this.customer = customer;
    });
  }
}
