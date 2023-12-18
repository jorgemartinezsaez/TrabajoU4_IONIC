import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaSepultacionesPage } from './consulta-sepultaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaSepultacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaSepultacionesPageRoutingModule {}
