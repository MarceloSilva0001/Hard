function letra(){
  var lt = window.document.getElementById('ex1').value
  var res1 = window.document.getElementById('res1')

  if(lt == 'a' || lt == 'e' || lt == 'i' || lt == 'o' ||lt == 'u'){
    res1.innerHTML = ` A letra (${lt}) é Vogal`
  }else{
    res1.innerHTML = ` A letra (${lt}) é Consoante`
  }
}
function soma3num(){
  var num1 = document.getElementById('num1').value
  var num2 = document.getElementById('num2').value
  var num3 = document.getElementById('num3').value
  var maior = num1;
  var res3 = document.getElementById('res3')
  if(maior < num2){
    maior = num2
  }
  if(maior < num3){
    maior = num3
  }
  res3.innerHTML = `O Maior Numero é o ${maior} entre os numeros (${num1}), (${num2}) e (${num3})`
}
function menormaior(){
  var num1 = document.getElementById('num1').value
  var num2 = document.getElementById('num2').value
  var num3 = document.getElementById('num3').value
  var menor = num1;
  var res3 = document.getElementById('res3')
  if(menor > num2){
    menor = num2
  }
  if(menor > num3){
    menor = num3
  }
  res3.innerHTML = `O Menor Numero é o ${menor} entre os numeros (${num1}), (${num2}) e (${num3})`
}
function nota(){
  var res2 = document.getElementById('res2')
  
  var num1 = document.getElementById('nota1')
  var num2 = document.getElementById('nota2')
  var nota1 = Number(num1.value)
  var nota2 = Number(num2.value)
  var media = (nota1+nota2)/2
  if(media >= 6){
    res2.innerHTML = `"Aprovado", suas notas (${nota1} e ${nota2}), sua média é ${media} `
    if(media >= 10){
      res2.innerHTML = `Aprovado com Distinção, suas notas (${nota1} e ${nota2}), sua média é ${media} `
    }
  }else{
    res2.innerHTML = `"Reprovado, suas notas (${nota1} e ${nota2}), sua média é ${media} `
  }

  // res2.innerHTML = `notas (${nota1} e ${nota2}), sua média é ${media} `
}