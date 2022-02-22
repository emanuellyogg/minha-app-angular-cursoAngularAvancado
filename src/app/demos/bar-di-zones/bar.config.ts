import { InjectionToken } from "@angular/core";

export interface BarUnidadeConfig {
  unidadeId: number,
  unidadeToken: string
}

export const BAR_UNIDADE_COFING = new InjectionToken<BarUnidadeConfig>('BAR_UNIDADE_COFING'); 