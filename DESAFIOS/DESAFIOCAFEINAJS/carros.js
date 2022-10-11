//selecionar elementos

var namecar = window.document.getElementById('nomecar')
var carval = window.document.getElementById('valcarro')
var porc = window.document.getElementById('porcent')
var parcelas = window.document.getElementById('parc')
var res = window.document.getElementById('result') 


//função

function calc() {
    res.innerHTML = ''

if (namecar.value.length == 0 || carval.value.length == 0 || porc.value.length == 0){
    window.alert('ERRO - Algum campo em branco - VERIFIQUE!')
} else if(carval.value <=0 || porc.value <= 0 ){
    window.alert('ERRO - Valor do carro ou da porcentagem não pode ser zero ou negativo')
}else if(carval.value > 0 && porc.value >= 30  && porc.value <= 90 ){
    var valentrada = (carval.value * (porc.value /100))
    var parcela = ((carval.value - valentrada) / parcelas.value)


    res.innerHTML += (`Nome do carro: ${namecar.value}<BR>`)
    res.innerHTML += (`O valor da entrada será de: R$${valentrada.toFixed(2)}<BR>`)
    res.innerHTML += (`Serão ${parcelas.value} parcelas e o valor da parcela será de: R$${parcela.toFixed(2)}<BR>`)
}else{
    res.innerHTML= ('PROMOÇÃO NEGADA - porcentagem da entrada menor que 30% ou maior que 90%')
}

}


function limpa() {

    res.innerHTML = ''
    namecar.value = ''
    carval.value = ''
    porc.value = ''
    namecar.focus()

}
