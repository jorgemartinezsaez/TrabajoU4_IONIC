import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaveUnicaPage } from './clave-unica.page';

const routes: Routes = [
  {
    path: '',
    component: ClaveUnicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaveUnicaPageRoutingModule {}
