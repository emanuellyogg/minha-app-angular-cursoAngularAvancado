import { ProdutoService } from './services/produto.service';
import { ProdutoCountComponent } from './componentes/produto-count.component';
import { ProdutoDetalheComponent } from './componentes/produto-card-detalhe.component';
import { ProdutoRoutingModule } from './produto.route';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';

import { CommonModule, registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { ProdutoAppComponent } from './produto.app.component';
import { ProdutosResolve } from './services/produto.resolve';

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
  providers: [
    ProdutoService,
    ProdutosResolve
  ],
  exports: []
})

export class ProdutoModule { }
