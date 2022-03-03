import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Injector } from '@angular/core';
import { BarUnidadeConfig, BAR_UNIDADE_COFING } from './bar.config';
import { BarFactory, BarService, BebidaService } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styles: [],
  providers: [
    // { provide: BarService, useClass: BarServiceMock },
    {
      provide: BarService, useFactory: BarFactory,
      deps: [
        HttpClient, Injector
      ]
    },
    { provide: BebidaService, useExisting: BarService }
  ]
})
export class BarComponent implements OnInit {

  configManual: BarUnidadeConfig;
  config: BarUnidadeConfig;
  barBebida1: string;
  barBebida2: string;
  dadosUnidade: string;

  constructor(
    private barService: BarService,
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_COFING) private ApiConfig: BarUnidadeConfig,
    private bebidaService: BebidaService
  ) { }

  ngOnInit() {
    this.barBebida1 = this.barService.obterBebidas();
    this.configManual = this.ApiConfigManual;
    this.config = this.ApiConfig;

    this.dadosUnidade = this.barService.obterUnidade();
    this.barBebida2 = this.bebidaService.obterBebidas();

  }
}
