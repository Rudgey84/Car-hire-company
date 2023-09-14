import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { AddvehicleComponent } from './add-vehicle/add-vehicle.component';

const routes: Routes = [
  { path: '', redirectTo: '/vehicles', pathMatch: 'full' },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'detail/:id', component: VehicleDetailComponent },
  { path: 'add-vehicle', component: AddvehicleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [[RouterModule]],
})
export class AppRoutingModule {}