import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistervehiclePageRoutingModule } from './registervehicle-routing.module';

import { RegistervehiclePage } from './registervehicle.page';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RegistervehiclePageRoutingModule
  ],
  declarations: [RegistervehiclePage]
})
export class RegistervehiclePageModule {}
