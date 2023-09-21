import { Component, OnInit, inject } from '@angular/core';

import { Vehicle } from '../vehicle.interface';
import { Customer } from '../customer.interface';
import { VehicleService } from '../vehicle.mock.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
})
export class VehiclesComponent implements OnInit {
  public searchText;
  public vehicles: Vehicle[];
  public hiredVehicles: Vehicle[];
  private customer: Customer[];
  private vehicleService = inject(VehicleService);
  //constructor(private vehicleService: VehicleService) {}

  public returnVehicle(id): void {
    const vehicleToReturn = this.hiredVehicles.find(
      (vehicle) => vehicle.id === id
    );
    if (vehicleToReturn) {
      vehicleToReturn.bookedOut = false;
      this.getVehicles();
      console.log(`Returned vehicle with ID ${id}`);
    } else {
      console.log(`Vehicle with ID ${id} not found`);
    }
  }

  public ngOnInit() {
    this.getVehicles();
    this.getCustomer();
    this.assignVehiclesToCustomers();
  }

  private getVehicles(): void {
    this.vehicleService.getVehicles().subscribe((vehicles: Vehicle[]) => {
      this.vehicles = this.getFilteredVehicles(vehicles);
      this.hiredVehicles = this.getHiredVehicles(vehicles);

    });
  }

  private getCustomer(): void {
    this.vehicleService.getCustomers().subscribe((customer: Customer[]) => {
      this.customer = customer;
    });
  }

  private assignVehiclesToCustomers(): void {
    if (this.customer && this.hiredVehicles) {
      this.customer.forEach((customer) => {
        customer.hires.forEach((hire) => {
          const matchingVehicle = this.hiredVehicles.find((vehicle) => vehicle.id === hire.id);
          if (matchingVehicle) {
            matchingVehicle.assignedTo = customer.id;
          }
        });
      });
    }
  }

  private getFilteredVehicles(vehicles: Vehicle[]): Vehicle[] {
    return vehicles.filter((vehicles) => !vehicles.bookedOut);
  }

  private getHiredVehicles(vehicles: Vehicle[]): Vehicle[] {
    return vehicles.filter((vehicles) => vehicles.bookedOut);
  }
}
