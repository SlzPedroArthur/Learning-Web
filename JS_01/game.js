//Jogo para acertar o número secreto
const secretNumber = 4;

flag = false
while (flag === false){
   let guess = Number(prompt('Advinhe o número'))
   if(guess === secretNumber){
      alert('Acertou')
      flag = true
   } else if (guess < secretNumber){
      alert('Menor')
   } else {
      alert('Maior')
   }
}

//Já chegamos?
var answer = prompt('Já chegamos?')

while(answer.indexOf('sim') === -1){
   var answer = prompt('Já chegamos?')
}
alert('Ótimo!')


//