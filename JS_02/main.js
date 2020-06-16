function acontece(alunos, num){
   presentes = 0
   for(i = 0; i < alunos.length; i++){
       if(alunos[i] <= 0){presentes++;}
   }
   return num <= presentes
}

function aberturas(alunos, num){
   var teveAula = []
   for(i = 0; i < alunos.length; i++){
      teveAula[i] = acontece(alunos[0], num)
   }
   return teveAula
}
var alunosDaSegunda = [10, -5, 3, 0];
var alunosDaTerca = [10, -2];
var alunosDaQuarta = [10, 3, 0];

console.log(aberturas(alunosDaSegunda, 2))