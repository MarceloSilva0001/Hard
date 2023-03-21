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
function anodenascimento(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('nasc')
    var res = document.getElementById('res')
    
//fano.value.lenght, valida se o usuario   não  digitou nada, com isso o valor fica como zero
//fano.value > ano, valida se ano digitado é maior que o ano atual....
 if(fano.value.lenght == 0 || fano.value > ano){
    window.alert('erro')
 }else{
    //recebe a escolha do checbox e armazena na variavel
    var fsex = document.getElementsByName('sexo')

    // Fazendo a subtração do valor  ano atual menos o ano de nascimento, e armazeando dentro da variavel idade.
    var idade = ano - Number(fano.value)

    //Atribuidno a variavel genero uma valor de string vazio
    var genero = ''

    //como no getElementById, que seleciona uma tag que existe a guarda na variavel, "document.createElement('tag')", cria uma tag e armazena ela dentro de uma variavel como fazemos como é feito da outra forma, resumindo ele cria uma tag.
    var img = document.createElement('img')

    //Aqui está sendo atruibuido um id para a tag que foi criada com o "createElement('img')", como nas tag normais é importante o id para identificação e como é foi criada atraves do js, pelo js colocamos o id vinculado a tag.
    img.setAttribute('id','foto')

    //essa condição valida se oque está amarzenado no na variavel fsex na primeira possição [0] é o atributo masculuno.
    //Como se interpreta essa parte? é assim: se estiver marcado o check box da possição 0 que é a primeira faz esse bloco. 
        if(fsex[0].checked){
            genero =  'Homem'
            if(idade >= 0 && idade < 12){
    //aqui a tag 'img' que criamos pelo js, recebe setAttribute, que significa atribuição de elemento, abre parestes('o atributo vai ser o 'src') de imagem e depois coloca se , para separar e passa o caminho da imagem.
               img.setAttribute('src', 'm.criança.jpg')
    // se o bloco for true, vai alterar a cor do back ground.
               document.body.style.background = 'rgba(0, 38, 255, 0.616)'
            }else if(idade >=12 && idade < 18){
                img.setAttribute('src', 'm.adolecente10.15.jpg')
            }else if(idade >=18 && idade < 30){
                img.setAttribute('src', 'm.jovem.jpg')
            }else if(idade >=30 && idade < 130){
                img.setAttribute('src', 'm.velho.jpg')
            }else{
                img.setAttribute('src', 'caveira.jpg')
            }
        }else if(fsex[1].checked){
            genero =  'Mulher'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'f.criança.jpg')

                document.body.style.background = 'rgba(255, 0, 191, 0.932)'
            }else if(idade >=12 && idade < 18){
                img.setAttribute('src', 'f.adolecente10.15.jpg')
            }else if(idade >=18 && idade < 30){
                img.setAttribute('src', 'f.jovem.jpg')
            }else if(idade >=30 && idade < 130){
                img.setAttribute('src', 'f.velha.jpg')
            }else{
                img.setAttribute('src', 'caveira.jpg')
            }
        }
    //aqui dentro da tag res dentro do html vai mostrar essas informações
    res.innerHTML = 'Detectamos um '+genero+' com '+idade+' anos.'
    // aqui está sendo adicionado um elemento que no caso vai ser a tag de imagem, a div com id res, bem parecido como fazemos quando vamos mostrar texto.
    res.appendChild(img)
 }
}
function mudarFundo(){
  var mostrehrs = document.getElementById('mostrehrs');
  var img = document.createElement("img");
  var data = new Date();
  var horas = data.getHours();

    mostrehrs.innerText = `Agora é ${horas} Horas `

    if(horas >= 0 && horas < 6){
      document.body.style.backgroundImage = "url(noite.jpg)";

    }else if(horas >= 6 && horas < 12){
      document.body.style.backgroundImage = "url(manhã.jpg)";

    }else if(horas >= 12 && horas < 18){
      document.body.style.backgroundImage = "url(tarde.jpg)";

    }else if(horas >= 18){
      document.body.style.backgroundImage = "url(noite.jpg)";
      
    }
}
function xAOy(){
//coletando o valores de input
  var inicio  = document.getElementById("inicio").value;
  var fim = document.getElementById("fim").value;
  var pulo = document.getElementById("pulo").value;
//Coletando o id de uma tag
  var res7 = document.getElementById("res7");
//Convertendo os valores de input em Numero
  inicio = Number(inicio);
  fim = Number(fim);
  pulo = Number(pulo); 
//Criando regra de validação
  if(inicio < fim){
    for(var i = inicio; i <= fim;i+=pulo){
      res7.innerHTML += ` >${i}`;
    }
        
  }else{
    for(var i = inicio; i >= fim;i-=pulo){
      res7.innerHTML += ` >${i}`;
    }
      
  }
}











//-------------------
//Código da foto...
  const specs =  {video:{width:320}}
  navigator.mediaDevices.getUserMedia(specs).then(stream=>{

    const videoElement = document.querySelector("#video")
    videoElement.srcObject = stream
    
  })//.catch(erro=>{console.log(error)})

 window.addEventListener("DOMContentLoaded",Tirarfoto);
//-------------------

