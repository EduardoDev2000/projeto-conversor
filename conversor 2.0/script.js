
/*
let button = document.getElementById("button")
let seletor = document.getElementById("seletor- de-moedas")
let seletorprincipal = document.getElementById("seletor-principal")

function buttonconvert() {
  let inputdeconverter = document.querySelector(".convert").value
  let valoremreal = document.getElementById("convert-real")
  let moedasdiversas = document.querySelector("#value-moedas")



  console.log(seletor.value)
  let dolar = 4.9
  let euro = 5.19
  let libra = 6.01



  if (seletor.value == "Dolar") {

    moedasdiversas.innerHTML = new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD"
    }).format(inputdeconverter / dolar)
  }



  if (seletor.value == "Euro") {

    moedasdiversas.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputdeconverter / euro)
  }



  if (seletor.value == "Libra") {
    moedasdiversas.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GPB"
    }).format(inputdeconverter / libra)
  }




  valoremreal.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
  }).format(inputdeconverter)


}






function changecurrency() {
  let currencyname = document.getElementById("currency-name")
  let currencyimg = document.getElementById("currency-img")


  if (seletor.value == "Dolar") {
    currencyname.innerHTML = "Dolar americano "
    currencyimg.src = "./dolar.png"
  }

  if (seletor.value == "Euro") {
    currencyname.innerHTML = "Euro"
    currencyimg.src = "./euro.png"
  }


  if (seletor.value == "Libra") {
    currencyname.innerHTML = "Libra"
    currencyimg.src = "./libra 1.png"
  }


  buttonconvert()

}

function changeseletor() {

  let seletornome = document.querySelector("#troca-de-nome")
  let seletorimg = document.querySelector(".Real")


  if (seletorprincipal == "real") {
    seletornome.innerHTML = "real"
    seletorimg.src = "./real copy 2.png"
  }


  if(seletorprincipal == "dolar"){ 
    seletornome.innerHTML = "dolar"
    seletorimg.src = "./dolar.png"
  }


  if( seletorprincipal == "Euro"){ 
    seletornome.innerHTML = "Euro"
    seletorimg.src = "./euro.png"
  }



}


seletorprincipal.addEventListener("change", changeseletor)
seletor.addEventListener("change", changecurrency)
button.addEventListener("click", buttonconvert)    */



let buttonconvert = document.querySelector("button")
let valuereal = document.querySelector("#convert-real")
let seletor = document.querySelector("#seletor-de-moedas")
let valorinicial = document.querySelector("#seletor-principal")




function button() {

  let inputconvert = document.querySelector(".convert").value
  let valueconvertido = document.querySelector("#value-moedas")


  console.log(seletor.value)

  let dolarhj = 4.94
  let eurohj = 5.27
  let librahj = 6.03


  if (seletor.value == "Dolar") {

    valueconvertido.innerHTML = new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "EUA"
    }).format(inputconvert / dolarhj)

  }


  if (seletor.value == "Euro") {

    valueconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputconvert / eurohj)

  }


  if (seletor.value === "Libra"){

    valueconvertido.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GPB"
    }).format( inputconvert / librahj)

  }


    valuereal.innerHTML = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL"
    }).format(inputconvert)

}

function seletorcurrency() {
  console.log("trocou de valor ")


}



function seletorcurrency() {
  let img = document.querySelector("#currency-img")
  let name = document.querySelector("#currency-name")


  if (seletor.value == "Dolar") {
    name.innerHTML = "Dolar"
    img.src = "./dolar.png"

  }

  if (seletor.value == "Euro") {
    name.innerHTML = "Euro"
    img.src = "./euro.png"

  }

   if(seletor.value == "Libra"){ 
    name.innerHTML = "Libra"
    img.src = "./libra 1.png"

   }


}


function seletorprimario () {
  let inputprimario = document.querySelector(".convert").value
  let valueprimario = document.querySelector("#convert-real")
  

console.log(valorinicial.value)
  let realhj = 0.20


if(valorinicial == "Dolar"){
  

  valuereal.innerHTML = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "EUA"
  }).format(inputprimario /realhj )

}
button()
  
}




seletor.addEventListener("change", seletorcurrency)
buttonconvert.addEventListener("click", button)
valorinicial.addEventListener("change", seletorprimario)



















