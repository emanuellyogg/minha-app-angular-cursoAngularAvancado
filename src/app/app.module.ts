import { NavegacaoModule } from './navegacao/navegacao.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';

import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation'

import { AppRoutingModule } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NavegacaoModule,
    ReactiveFormsModule,
    NgBrazil,
    TextMaskModule,
    CustomFormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
