import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; // Import HttpClientInMemoryWebApiModule
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { AddvehicleComponent } from './add-vehicle/add-vehicle.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDatatableModule,
    Ng2SearchPipeModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  declarations: [
    AppComponent,
    VehiclesComponent,
    AddvehicleComponent,
    VehicleDetailComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
