import { AppCadastroPage } from './app.cadastro.po';
import { browser, logging } from 'protractor';

describe('Testes do formulário de cadastro', () => {
  let page: AppCadastroPage;

  beforeEach(() => {
    page = new AppCadastroPage();
  });

  it('Deve navegar até formulário de cadastro', () => {
    page.iniciarNavegação();
    expect(page.obterTituloCadastro()).toEqual('Demo Cadastro');
  });

  it('deve preencher o formulário de cadastro com sucesso', () => {
    page.campoNome.sendKeys('Emanuelly Ogg');
    page.campoCPF.sendKeys('04502646962');
    page.campoEmail.sendKeys('teste@teste.com');
    page.campoSenha.sendKeys('Teste@123');
    page.campoSenhaConfirmacao.sendKeys('Teste@123');

    page.botaoRegistrar.click();
    page.esperar(1000);

    expect(page.obterResultadoCadastro()).toContain('"nome":"Emanuelly Ogg"');
  });

  it('deve validar senhas diferentes', () => {
    page.campoNome.sendKeys('Emanuelly Ogg');
    page.campoCPF.sendKeys('04502646962');
    page.campoEmail.sendKeys('teste@teste.com');
    page.campoSenha.sendKeys('Teste@2123');
    page.campoSenhaConfirmacao.sendKeys('Teste@123');

    page.campoSenha.click();
    page.esperar(1000);

    expect(page.obterErroSenha()).toContain('As senhas não conferem');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
