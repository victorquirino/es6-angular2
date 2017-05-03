class NegociacaoService{

  constructor(){
    this._http = new HttpService();
  }

  obterNegociacoesdaSemana(){
    return new Promise((resolve, reject) => {
      this._http.get('negociacoes/semana')
        .then(negociacoes => {
          resolve(negociacoes.map(negociacao => new Negociacao(new Date(negociacao.data), negociacao.quantidade, negociacao.valor)));
        })
        .catch(erro => {
          reject(erro);
        });
    });
  }

  obterNegociacoesdaSemanaAnterior(){
    return new Promise((resolve, reject) => {
      this._http.get('negociacoes/anterior')
        .then(negociacoes => {
          resolve(negociacoes.map(negociacao => new Negociacao(new Date(negociacao.data), negociacao.quantidade, negociacao.valor)));
        })
        .catch(erro => {
          reject(erro);
        });
    });
  }

  obterNegociacoesdaSemanaRetrasada(){
    return new Promise((resolve, reject) => {
      this._http.get('negociacoes/retrasada')
        .then(negociacoes => {
          resolve(negociacoes.map(negociacao => new Negociacao(new Date(negociacao.data), negociacao.quantidade, negociacao.valor)));
        })
        .catch(erro => {
          reject(erro);
        });
    });
  }
}
