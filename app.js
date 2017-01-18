//Verificação e teste do JSLint

//Teste de modo estrito

function estrito() {
  "user strict";
}

//Obtendo o objeto do contexto global

var global = (function () {
  return this;
}());


//Declaração de variáveis em uma única linha

function variaveis() {
  var a = 0,
      b = a,
      c = 2 + 2,
      d = b - c,
      e = new Object(),
      f = [],
      g = {},
      h;
  
  //corpo da função...
}
