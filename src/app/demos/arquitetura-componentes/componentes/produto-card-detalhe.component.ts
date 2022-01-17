import { Produto } from './../models/produto';
import { Component, Input } from "@angular/core";

@Component({
  selector: 'produto-card-detalhe',
  templateUrl: './produto-card-detalhe.component.html'
})

export class ProdutoDetalheComponent {

  @Input()
  produto: Produto;
}