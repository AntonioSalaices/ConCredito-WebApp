import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CapturaComponent} from '../app/captura/captura.component';
import {ListadoComponent} from '../app/listado/listado.component';
import {EvaluacionComponent} from '../app/evaluacion/evaluacion.component';
import {DetailpageComponent} from '../app/detailpage/detailpage.component';
import {EditpageComponent} from '../app/editpage/editpage.component';

const routes: Routes = [
  { path: '', redirectTo:'captura', pathMatch:'full'},
  { path: 'captura', component: CapturaComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'evaluacion', component: EvaluacionComponent },
  { path: 'detalles/:id', component: DetailpageComponent },
  { path: 'editar/:id', component: EditpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
