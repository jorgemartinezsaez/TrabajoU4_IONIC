import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaParquesPage } from './consulta-parques.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaParquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaParquesPageRoutingModule {}
