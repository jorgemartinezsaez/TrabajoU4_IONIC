import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaveUnicaPageRoutingModule } from './clave-unica-routing.module';

import { ClaveUnicaPage } from './clave-unica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaveUnicaPageRoutingModule
  ],
  declarations: [ClaveUnicaPage]
})
export class ClaveUnicaPageModule {}
