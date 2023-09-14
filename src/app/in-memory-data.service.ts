import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Vehicle } from './vehicle.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const vehicles = [
      {
        id: 101,
        regno: 'TR01 TWH',
        vehicleType: 'Car',
        name: 'Audi',
        model: 'Q8 e-tron',
        price: 10000,
        mileage: 12,
        fuelType: 'petrol',
        description:
          'The new Audi Q8 e-tron is our fully-electric SUV thats adventurous, spacious, efficient and packed with Audi technology.',
        noWheels: 4,
        noPassengers: 4,
      },
      {
        id: 102,
        regno: 'TR02 TWH',
        vehicleType: 'Car',
        name: 'BMW',
        model: 'X1',
        price: 10000,
        mileage: 12,
        fuelType: 'petrol',
        description:
          'The BMW X1 is a line of cars produced by German marque BMW since 2009. It is in the subcompact luxury crossover class.',
        noWheels: 4,
        noPassengers: 4,
        bookedOut: true
      },
      {
        id: 103,
        regno: 'TR03 TWH',
        vehicleType: 'Convertible',
        name: 'Ferrari',
        model: 'Purosangue',
        price: 20000,
        mileage: 12,
        fuelType: 'petrol',
        description:
          'The Ferrari Purosangue is the first car of the Prancing Horse having four doors and seats, a mix of performance, comfort and driving pleasure.',
        noWheels: 4,
        noPassengers: 2,
      },
      {
        id: 104,
        regno: 'TR04 TWH',
        vehicleType: 'Car',
        name: 'Porsche',
        model: 'Cayenne',
        price: 6000,
        mileage: 12,
        fuelType: 'petrol',
        description:
          'The 2024 Cayenne debuts with a highly digitalized display and control interior concept, new chassis technology and innovative high-tech features.',
        noWheels: 4,
        noPassengers: 2,
      },
      {
        id: 105,
        regno: 'TR05 TWH',
        vehicleType: 'Van',
        name: 'Citroen',
        model: 'Belingo',
        price: 5000,
        mileage: 12,
        fuelType: 'petrol',
        description:
          'The current Citroen Berlingo is the best of the breed, as you would expect.',
        noWheels: 4,
        noPassengers: 2,
      },
      {
        id: 106,
        regno: 'TR06 TWH',
        vehicleType: 'Motorbike',
        name: 'Yamaha',
        model: 'YZF-R1 04',
        price: 1000,
        mileage: 12,
        fuelType: 'petrol',
        description:
          'It’s hard to fault the clinical, precise and devastatingly fast 2004 Yamaha R1. Its chassis can cope with all kinds of road surfaces and demolishes tight hairpins at any track.',
        noWheels: 2,
        noPassengers: 1,
      },
    ];
    return { vehicles };
  }

  genId(vehicles: Vehicle[]): number {
    return vehicles.length > 0 ? Math.max(...vehicles.map((v) => v.id)) + 1 : 1;
  }
}
