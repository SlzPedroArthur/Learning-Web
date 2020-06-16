const firstName = prompt('Qual o seu primeiro nome?')
const lastName = prompt('Qual o seu último nome?')
const age = prompt('Qual o sua idade?')

alert('Prazer em te conhecer, ' + firstName + ' ' + lastName)
console.log(firstName + ' tem ' + age + ' anos.')
console.log(firstName + ' já viveu pelo menos ' + 365.25*age + ' dias.')


//'==' tenta corrigir o tipo, já '===' não.
//Falsy: false, 0, "", null, undefined, Nan

if (age < 18){
   console.log('Nope!')
} else if (age < 21){
   console.log('Pode entrar, mas não beba.')
} else{
   console.log('Só vai')
}


if (age % Math.sqrt(age) === 0){
   console.log('Sua idade é uma raiz perfeita')
}

//Guess Number Game. Mude o diretório do arquivo para game.js no arquivo html. 
