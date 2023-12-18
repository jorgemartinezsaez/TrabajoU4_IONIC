import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaParquesPageRoutingModule } from './consulta-parques-routing.module';

import { ConsultaParquesPage } from './consulta-parques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaParquesPageRoutingModule
  ],
  declarations: [ConsultaParquesPage]
})
export class ConsultaParquesPageModule {}
