import { BAR_UNIDADE_COFING, BarUnidadeConfig } from './bar.config';
import { Inject, Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http"

export function BarFactory(http: HttpClient, injector: Injector) {
  return new BarService(http, injector.get(BAR_UNIDADE_COFING));
}
@Injectable()
export class BarService {
  
  constructor(
    private http: HttpClient,
    @Inject(BAR_UNIDADE_COFING) private config: BarUnidadeConfig
  ) { }

  public obterUnidade(): string {
    return 'Unidade id: ' + this.config.unidadeId + ' Token: ' + this.config.unidadeToken
  }

  obterBebidas(): string {
    return 'Bebidas';
  }

  obterPorcoes(): string {
    return 'Porções';
  }

  obterRefeicoes(): string {
    return 'Refeições';
  }
}

export class BarServiceMock {

  obterBebidas(): string {
    return 'Mock';
  }

  obterPorcoes(): string {
    return 'Mock';
  }

  obterRefeicoes(): string {
    return 'Mock';
  }
}