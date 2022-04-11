import { browser, by, element } from 'protractor';
import { AppBasePage } from '../app.base.po';

export class AppCadastroPage extends AppBasePage {

constructor(){ super(); }

  getTitleText() {
    return this.obterElementoXpath('/html/body/app-root/app-home/header/div/div/div[2]/h1').getText()
  }
}
