import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaSepultacionesPageRoutingModule } from './consulta-sepultaciones-routing.module';

import { ConsultaSepultacionesPage } from './consulta-sepultaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaSepultacionesPageRoutingModule
  ],
  declarations: [ConsultaSepultacionesPage]
})
export class ConsultaSepultacionesPageModule {}
