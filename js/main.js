let senhaQuatroDigt = document.querySelector("#quatroDigitos");
let senhaSeisDigt = document.querySelector("#seisDigitos");
let senhaOitoDigt = document.querySelector("#oitoDigitos");
let span = document.querySelector(".senha");

function escolhido(){
   let resultado;
   const itens = document.getElementsByName('digitos');
   for(let i = 0;i<itens.length;i++){
    if (itens[i].checked) {
        resultado = itens[i].value
        break;
      }
   }
   return resultado
}

function gerarSenha(){
  const resultado = escolhido();
  valorSenha = Math.floor(Math.random()*resultado);
  return valorSenha;
}

function convert(){
  let senhaString = gerarSenha().toString();
  let tamanhoQuatro = '0000';
  let tamanhoSeis = '000000';
  let tamanhoOito = '00000000';
  if(senhaString.length<=tamanhoQuatro.length){  
    if(senhaString.length<tamanhoQuatro.length){
      senhaString = senhaString.padStart(4,'0');
      console.log(senhaString);
    }
    return span.innerHTML = senhaString;
  };
  if(senhaString.length<=tamanhoSeis.length){  
    if(senhaString.length<tamanhoSeis.length){
      senhaString = senhaString.padStart(6,'0')
    }
    return span.innerHTML = senhaString; 
  };
  if(senhaString.length<=tamanhoOito.length){  
    if(senhaString.length<tamanhoOito.length){
      senhaString = senhaString.padStart(8,'0')
    }
    return span.innerHTML = senhaString; 
  };
  span.innerHTML = senhaString;
}