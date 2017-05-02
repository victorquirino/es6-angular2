class DateHelper{

  constructor(){
    throw new Error('Esta classe não pode ser instanciada');
  }

  static dataParaTexto(data){
    return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
  }

  static textoParaData(string){
      if(!/\d{4}-\d{2}-\d{2}/.test(string))
        throw new Error('O formato deve estar em aaaa-mm-dd');
    return new Date(...string.split('-').map((item, index) => item - index % 2));
  }

  // A função 'map' permite percorrer um array e substituir por outro
  // .map(function(item, index){
  // if(index == 1){
  //   return item - 1;
  // }
  //
  // return item;
  // })

  // '=>' Nova sintaxe chamada 'arrow function' para funções no ES6
  // .map((item, index) => {
  //   return item - index % 2;
  // })

  // Quando existir somente 1 instrução, retirar as 'chaves' e a palavra 'return'
  // .map((item, index) => item - index % 2)
}
