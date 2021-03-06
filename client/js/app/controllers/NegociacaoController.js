class NegociacaoController{

  constructor(){
    let $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      new NegociacoesView($('#negociacoesView')),
      'adicionaNegociacao', 'esvazia'
    );

    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($('#mensagemView')),
      'texto'
    );
  }

  adiciona(event){
    event.preventDefault();

    this._listaNegociacoes.adicionaNegociacao(this._criaNegociacao());
    this._mensagem.texto = "Sua negociação foi adicionada com sucesso";
    this._limpaFormluario();
  }

  importaNegociacoes(){
    let service = new NegociacaoService();

    Promise.all([
      service.obterNegociacoesdaSemana(),
      service.obterNegociacoesdaSemanaAnterior(),
      service.obterNegociacoesdaSemanaRetrasada()]
    ).then(negociacoes => {
        negociacoes
        .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
        .forEach(negociacao => this._listaNegociacoes.adicionaNegociacao(negociacao));
        this._mensagem.texto('Negociações importadas com sucesso');
      })
      .catch(erro => this._mensagem.texto = erro);
  }

  apaga(){
    this._listaNegociacoes.esvazia();
    this._mensagem.texto = "Lista de negociações apagada";
  }

  _criaNegociacao(){
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  _limpaFormluario(){
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }
}
