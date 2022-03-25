import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Injector, NgZone } from '@angular/core';
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
    private bebidaService: BebidaService,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.barBebida1 = this.barService.obterBebidas();
    this.configManual = this.ApiConfigManual;
    this.config = this.ApiConfig;

    this.dadosUnidade = this.barService.obterUnidade();
    this.barBebida2 = this.bebidaService.obterBebidas();

  }

  public progress: number = 0;
  public label: string;

  processWithinAngularZone() {
    this.label = 'dentro';
    this.progress = 0;
    this._increaseProgress(() => console.log('Finalizado por dentro do Angular!'));
  }

  processOutsideOfAngularZone() {
    this.label = 'fora';
    this.progress = 0;
    this.ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        this.ngZone.run(() => { console.log('Finalizado fora!');});
      });
    });
  }

  _increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Progresso atual: ${this.progress}%`);

    if (this.progress < 100) {
      window.setTimeout(() => this._increaseProgress(doneCallback), 10);
    } else {
      doneCallback();
    }
    
  }
}
