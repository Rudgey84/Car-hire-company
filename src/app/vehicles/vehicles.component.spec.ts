import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiclesComponent } from './vehicles.component';
import { VehicleService } from '../vehicle.mock.service';
import { of } from 'rxjs';
import { Vehicle } from '../vehicle.interface';
import { Customer } from '../customer.interface';

describe('VehiclesComponent', () => {
  let component: VehiclesComponent;
  let fixture: ComponentFixture<VehiclesComponent>;
  let vehicleService: jasmine.SpyObj<VehicleService>;

  beforeEach(() => {
    vehicleService = jasmine.createSpyObj('VehicleService', ['getVehicles', 'getCustomers']);

    TestBed.configureTestingModule({
      declarations: [VehiclesComponent],
      providers: [
        { provide: VehicleService, useValue: vehicleService }
      ],
    });

    fixture = TestBed.createComponent(VehiclesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a vehicle', () => {
    const idToReturn = 1;
    const hiredVehicles: Vehicle[] = [{ id: 1, bookedOut: true }, { id: 2, bookedOut: true }];
    component.hiredVehicles = hiredVehicles;

    component.returnVehicle(idToReturn);

    expect(hiredVehicles[0].bookedOut).toBe(false);
  });



});
