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
function inverter(){
 var valor1 = document.getElementById('valor1').value
 var valor2 = document.getElementById('valor2').value
 var res4 = document.getElementById('res4')
//....
 var aux = Number(valor1)
  v1 = Number(valor2)
  v2 = aux
window.alert(` Antes ${valor1}/${valor2}\nDepois ${v1}/${v2}`)
res4.innerHTML = ` Antes ${valor1}/${valor2}\nDepois ${v1}/${v2}`
}
function descrecente(){
  var res6 = document.getElementById('res6')
  var ord1= document.getElementById('ord1').value
  var ord2= document.getElementById('ord2').value
  var ord3= document.getElementById('ord3').value

  ord1 = Number(ord1)
  ord2 = Number(ord2)
  ord3 = Number(ord3)
}
//Código da foto...
  const specs =  {video:{width:320}}
  navigator.mediaDevices.getUserMedia(specs).then(stream=>{

    const videoElement = document.querySelector("#video")
    videoElement.srcObject = stream
    
  })//.catch(erro=>{console.log(error)})

 window.addEventListener("DOMContentLoaded",Tirarfoto);

