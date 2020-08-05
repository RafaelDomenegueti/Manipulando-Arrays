var select = document.getElementById("select")
var nunadd = []

function adicionar(){

    var num = document.getElementById("num").value
    var n = Number(num)

    if (n == ""){
        alert("[ERRO!]")
    } else if (n <= 100 && n >= 1) {

        if (nunadd.indexOf(n) > -1){
            alert("[ERRO!]")
        } else {

            for (let c = 1; c <= 5; c++){
                document.getElementById(`p${c}`).innerHTML=""
            }

            nunadd.push(n)
            var option = document.createElement("option")
            option.innerHTML=`Valor ${n} adicionado.`
            select.appendChild(option)

        }

    } else {
        alert("[ERRO!]")
    }
    
}  

var p = 0
var soma = 0

function finalizar(){
    
    if (nunadd.length == 0){
        alert("Adicione um número antes de finalizar!")
    } else {

        nunadd.sort(function(a, b){return a-b})
        
        p = 0
        soma = 0

        while (p<= nunadd.length-1) {
           soma = soma + nunadd[p] 
           p++
        }

        document.getElementById("p1").innerHTML=`Ao todo, temos ${nunadd.length} números cadastrados.`

        document.getElementById("p2").innerHTML=`O maior valor informado foi ${nunadd[nunadd.length - 1]}.`

        document.getElementById("p3").innerHTML=`O menor valor informado foi ${nunadd[0]}`

        document.getElementById("p4").innerHTML=`Somando todos os valores, temos ${soma}`

        document.getElementById("p5").innerHTML=`A média dos valores digitados é ${soma/nunadd.length}`
    }

}