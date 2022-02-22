import { BarService } from './demos/bar-di-zones/bar.service';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TextMaskModule } from 'angular2-text-mask';
import { NgBrazil } from 'ng-brazil';
import { CustomFormsModule } from 'ng2-validation';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { BarModule } from './demos/bar-di-zones/bar.module';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { ImageFormaterPipe } from './demos/pipes/filmes/image.pipe';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';


registerLocaleData(localePt);

export const BAR_PROVIDERS: Provider[] = [
  BarService
];


@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NavegacaoModule,
    ReactiveFormsModule,
    NgBrazil,
    TextMaskModule,
    CustomFormsModule,
    AppRoutingModule,
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: 'aush6721uhaush817juajs'
    })
  ],
  providers: [
    AuthGuard,
    CadastroGuard,
    // BAR_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
