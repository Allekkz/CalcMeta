function calcular() {
    var barra1 = document.getElementById("barra1").value;
    var barra2 = document.getElementById("barra2").value;

    var calculo = (barra1 - barra2) / barra2
    var ano = calculo / 12;
    if (calculo < 12 && calculo > 0) {
        alert(parseInt(calculo) + ' mêses restantes');
    }

    if (calculo > 12) {
        var ano = calculo / 12;
        alert(parseInt(ano) + " anos restantes");
    }
    if (calculo <= 0) {
        alert("Você já possui o dinheiro necessário :)");
    }
    if (calculo > 900 && calculo <=1000) {
        alert("KKKKK até lá eu já morri!");
    }
    if(calculo >=1001 && calculo <=2000){
        alert("Você ta de brincadeira né kkkkkk, " + parseInt(ano) + " anos kkkkkkk")
    }
    if(calculo >= 2000){
        alert("Agora eu to com medo..., o que você quer comprar que é tão caro mesmo ganhando tão pouco ???, isso levaria " + parseInt(ano) + " anos.." )
    }

}
