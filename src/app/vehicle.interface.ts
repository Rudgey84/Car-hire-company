export class Vehicle {
  id?: number;
  regno: string;
  vehicleType: string;
  name: string;
  model: string;
  price: number;
  mileage: number;
  fuelType: string;
  description: string;
  bookedOut?: boolean;
  noWheels: number;
  noPassengers: number;
  assignedTo?: string;
}
