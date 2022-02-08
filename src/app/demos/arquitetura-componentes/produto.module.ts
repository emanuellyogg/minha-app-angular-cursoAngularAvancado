import { ProdutoCountComponent } from './componentes/produto-count.component';
import { ProdutoDetalheComponent } from './componentes/produto-card-detalhe.component';
import { ProdutoRoutingModule } from './produto.route';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';

import { CommonModule, registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { ProdutoAppComponent } from './produto.app.component';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    ProdutoAppComponent,
    ProdutoDashboardComponent,
    ProdutoDetalheComponent,
    ProdutoCountComponent,
    EditarProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ],
  exports: [

  ]
})

export class ProdutoModule { }
