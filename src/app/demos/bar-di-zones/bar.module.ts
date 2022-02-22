import { BarUnidadeConfig, BAR_UNIDADE_COFING } from './bar.config';
import { BarComponent } from './bar.component';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BarComponent
  ],
  exports: [
    BarComponent
  ]
})

export class BarModule {
  static forRoot(config: BarUnidadeConfig): ModuleWithProviders {
    return {
      ngModule: BarModule,
      providers: [
        { provide: 'ConfigManualUnidade', useValue: config },
        { provide: BAR_UNIDADE_COFING, useValue: config }
      ]
    }
  }
}