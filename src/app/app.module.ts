import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxFileDropModule} from 'ngx-file-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapturaComponent } from './captura/captura.component';
import { ListadoComponent } from './listado/listado.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { ModalsalirComponent } from './modalsalir/modalsalir.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { EditpageComponent } from './editpage/editpage.component';


@NgModule({
  declarations: [
    AppComponent,
    CapturaComponent,
    ListadoComponent,
    EvaluacionComponent,
    ModalsalirComponent,
    DetailpageComponent,
    EditpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    NgxFileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
