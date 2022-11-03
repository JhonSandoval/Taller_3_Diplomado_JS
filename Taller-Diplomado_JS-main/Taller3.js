//let triangulo =  l + l + l
//let area =  (b * h) / 2

//triangulo
document.getElementById("BtnPerimetro").addEventListener("click", CalcularPerimetro);
document.getElementById("BtnArea").addEventListener("click", CalcularArea)

//Circulo

document.getElementById("BtnPerimetroCirculo").addEventListener("click", CalcularPerimetroCirculo);
document.getElementById("BtnAreaCirculo").addEventListener("click", CalcularAreaCirculo)

//Cuadrado

document.getElementById("BtnPerimetroCuadrado").addEventListener("click", CalcularPerimetroCuadrado);
document.getElementById("BtnAreaCuadrado").addEventListener("click", CalcularAreaCuadrado);

//Rectangulo

document.getElementById("BtnPerimetroRectangulo").addEventListener("click", CalcularPerimetroRectangulo);
document.getElementById("BtnAreaRectangulo").addEventListener("click", CalcularAreaRectangulo);

//Prestamo

document.getElementById("BtnPrestamo").addEventListener("click", Prestamo);
document.getElementById("BtnGenerarTabla").addEventListener("click", GenerarTabla);


// Calcular perimetro y area de un trinagulo
function CalcularPerimetro(){

    lado = parseInt(document.getElementById('valor_1').value);
    resultado = lado * lado * lado
    contenido = document.getElementById('contenido')
    contenido.innerHTML = 'Resultado: ' + resultado;
}

function CalcularArea(){
    base = parseInt(document.getElementById('valor_2').value)
    altura = parseInt(document.getElementById('valor_3').value)
    resultado = (base * altura) / 2 
    contenido = document.getElementById('contenido')
    contenido.innerHTML = 'Resultado: ' + resultado;

}



// Calcular Perimetro y area de un circulo

function CalcularPerimetroCirculo(){
        diametro = parseInt(document.getElementById('valor_4').value);
        resultado = diametro * Math.PI
        contenido = document.getElementById('contenido1')
        contenido.innerHTML = 'Resultado: ' + resultado;

}

function CalcularAreaCirculo(){
        x = parseInt(document.getElementById('valor_5').value);
        resultado = Math.PI * Math.pow(x, 2)
        contenido = document.getElementById('contenido1')
        contenido.innerHTML = 'Resultado: ' + resultado;

}

// Calcular el perimetro de un cuadrado

function CalcularPerimetroCuadrado(){
    perimetro = parseInt(document.getElementById('valor_6').value);
    resultado = 4 *  perimetro
    contenido = document.getElementById('contenido2')
    contenido.innerHTML = 'Resultado: ' + resultado;

}

function CalcularAreaCuadrado(){
    x = parseInt(document.getElementById('valor_7').value);
    resultado =  Math.pow(x, 2)
    contenido = document.getElementById('contenido2')
    contenido.innerHTML = 'Resultado: ' + resultado;

}

// Calcular el perimetro de un Rectangulo

function CalcularPerimetroRectangulo(){
    a = parseInt(document.getElementById('valor_8').value);
    b = parseInt(document.getElementById('valor_9').value);
    resultado = (2 * a) + (2 * b)
    contenido = document.getElementById('contenido3')
    contenido.innerHTML = 'Resultado: ' + resultado;

}

function CalcularAreaRectangulo(){
    a = parseInt(document.getElementById('valor_10').value);
    b = parseInt(document.getElementById('valor_11').value);
    resultado = b * a
    contenido = document.getElementById('contenido3')
    contenido.innerHTML = 'Resultado: ' + resultado;

}

function Prestamo(){

   // mensual  = 0

    valor_prestamo = parseInt(document.getElementById('valor_12').value);
    //console.log(valor_prestamo)
    valor_tasa_interes = parseFloat(document.getElementById('valor_13').value)/100;
    //console.log(valor_tasa_interes)
    tiempo = parseInt(document.getElementById('valor_14').value);
    //console.log(tiempo)
    x =  (  1 + valor_tasa_interes)
  //  console.log(x)
    y =  Math.pow(x, tiempo) - 1
    console.log(y)
    resultado =  valor_prestamo * y

contenido = document.getElementById('contenido4')
contenido.innerHTML = '</br> Total de intereses a pagar es: ' + formatMoney( Math.round(resultado)) + ' </br> Total a pagar: ' + formatMoney( Math.round(resultado+valor_prestamo))

}

function formatMoney(subject){
    subject = subject + ""
    return subject.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

}

function GenerarTabla(){
    contenido = document.getElementById('tabla_resultado')
    table = document.createElement("table");
    table.classList.add("table")
    tr = document.createElement("tr");
    heads = [
        "mes", "Capital", "interes", "saldo"
    ]

    heads.forEach(element => {
        th = document.createElement("th");
        th.innerHTML = element
        tr.appendChild(th) 
    });
    table.appendChild(tr)

    // Get values from form
    
    valor_prestamo = parseInt(document.getElementById('valor_12').value);
    valor_tasa_interes = parseFloat(document.getElementById('valor_13').value);
    tiempo = parseInt(document.getElementById('valor_14').value);

    for (let mes = 0; mes < tiempo; mes++) {
        
        tr = document.createElement("tr");
        
        td = document.createElement("td");
        td.innerHTML = mes  
        tr.appendChild(td) 
                
        td = document.createElement("td");
        td.innerHTML = formatMoney(valor_prestamo)
        tr.appendChild(td) 
        calculo_interes = Math.round(valor_prestamo * valor_tasa_interes/100)
        valor_prestamo = valor_prestamo + calculo_interes
        td = document.createElement("td");
        td.innerHTML = formatMoney(calculo_interes)
        tr.appendChild(td) 
        
        td = document.createElement("td");
        td.innerHTML = formatMoney(valor_prestamo)
        tr.appendChild(td) 
        
        
        table.appendChild(tr)
    }
   
    contenido.appendChild(table)

    console.log('voy a generar una tabla bonita')
}
