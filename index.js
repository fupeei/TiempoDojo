function desplegarAlerta(elemento){
    alert("Cargando informe metereológico...")
}
function aceptarCookies (elemento){
    let eliminarMensaje = document.querySelector('.containalert')
    eliminarMensaje.remove();
}
function cambiarTemp (elemento){
    let opcion = elemento.value
    let tipoDeTemp = document.querySelectorAll('.temp')
    
    if(opcion === 'f'){
        for( let i = 0; i < tipoDeTemp.length; i++){
            let numDeTempC = tipoDeTemp[i].innerText;
            let numDeTempFinal = (numDeTempC * 1.8) + 32;
            tipoDeTemp[i].innerText = Math.round(numDeTempFinal);
        }
    }
    else {
        for(let i = 0; i < tipoDeTemp.length; i++){
            let numDeTempF = tipoDeTemp[i].innerText;
            let numDeTempFinal = (numDeTempF - 32) / 1.8;
            tipoDeTemp[i].innerText = Math.round(numDeTempFinal);
        }
    }
}