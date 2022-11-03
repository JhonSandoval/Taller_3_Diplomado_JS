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
    valor_tasa_interes = parseFloat(document.getElementById('valor_13').value);
    //console.log(valor_tasa_interes)
    tiempo = parseInt(document.getElementById('valor_14').value);
    //console.log(tiempo)
    x =  (  1 + valor_tasa_interes)
  //  console.log(x)
    y =  Math.pow(x, tiempo) - 1
    console.log(y)
    resultado =  valor_prestamo * y

contenido = document.getElementById('contenido4')
contenido.innerHTML = 'Resultado_tasa_interes: ' + resultado + ' Resultado de tiempo: ' + tiempo

}


function GenerarTabla(){
    contenido = document.getElementById('tabla_resultado')
    table = document.createElement("table");
    table.classList.add("table")
    tr = document.createElement("tr");
    heads = [
        "mes", "Capital", "interes", "saldo"
    ]
    // for (let index = 0; index < heads.length; index++) {
    //     const element = heads[index];
    //     th = document.createElement("th");
    //     th.innerHTML = element
    //     tr.appendChild(th)   
    // }

    heads.forEach(element => {
        th = document.createElement("th");
        th.innerHTML = element
        tr.appendChild(th) 
    });


    // tr = document.createElement("tr");
    // th = document.createElement("th");
    // th.innerHTML = "mes"
    // tr.appendChild(th)

    // th = document.createElement("th");
    // th.innerHTML = "Capital"
    // tr.appendChild(th)

    // th = document.createElement("th");
    // th.innerHTML = "interes"
    // tr.appendChild(th)

    // th = document.createElement("th");
    // th.innerHTML = "saldo"
    // tr.appendChild(th)

    table.appendChild(tr)

    contenido.appendChild(table)

    console.log('voy a generar una tabla bonita')
}
