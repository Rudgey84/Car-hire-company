import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { VEHICLES } from './vehicles.mock';
import { Vehicle } from './vehicle.interface';

import { VEHICLETYPES } from './vehicle-types.mock';
import { VehicleType } from './vehicle-type.interface';

import { CUSTOMER } from './customers.mock';
import { Customer } from './customer.interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private vehiclesUrl = 'api/vehicles';

  constructor(private httpClient: HttpClient) {}

  getVehicles(): Observable<Vehicle[]> {
    return of<Vehicle[]>(VEHICLES);
  }

  getVehicle(id: number): Observable<Vehicle> {
    const vehicle = VEHICLES.find((v) => v.id === id);
    return of<Vehicle>(vehicle);
  }

  updateVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return of<Vehicle>(vehicle);
  }

  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.httpClient
      .post<Vehicle>(this.vehiclesUrl, vehicle, httpOptions)
      .pipe(
        tap((v: Vehicle) => console.log(`added a new vehicle with id=${v.id}`))
      );
  }

  getVehicleTypes(): Observable<VehicleType[]> {
    return of<VehicleType[]>(VEHICLETYPES);
  }

  getCustomers(): Observable<Customer[]> {
    return of<Customer[]>(CUSTOMER);
  }
}
