function takevalue(x){
    document.getElementById('resultado').innerHTML +=x;
}
 
function clearinput(){
    document.getElementById('resultado').innerHTML="";
}
function calculateresult(){
    var resultado = eval(document.getElementById('resultado').innerHTML)
    document.getElementById('resultado').innerHTML = resultado
}

var coma = document.getElementById('coma');
var uno  = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis  = document.getElementById('seis');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');

var mas = document.getElementById('mas');
var resta = document.getElementById('resta');
var multiplicacion = document.getElementById('multiplicacion');
var division = document.getElementById('division');
var igual = document.getElementById('igual');
var borrar = document.getElementById('borrar');


cero.addEventListener("click",function(){
    takevalue(0)
    })
    coma.addEventListener("click",function(){
        takevalue(",")
        })
uno.addEventListener("click",function(){
takevalue(1)
})

dos.addEventListener("click",function(){
    takevalue(2)
    })

    tres.addEventListener("click",function(){
        takevalue(3)
        })


        cuatro.addEventListener("click",function(){
            takevalue(4)
            })


            cinco.addEventListener("click",function(){
                takevalue(5)
                })


                seis.addEventListener("click",function(){
                    takevalue(6)
                    })

                    siete.addEventListener("click",function(){
                        takevalue(7)
                        })

                        ocho.addEventListener("click",function(){
                            takevalue(8)
                            })

                            nueve.addEventListener("click",function(){
                                takevalue(9)
                                })
mas.addEventListener("click",function(){
takevalue("+");
})
resta.addEventListener("click",function(){
    takevalue("-");
    })
    multiplicacion.addEventListener("click",function(){
        takevalue("*");
        })
        division.addEventListener("click",function(){
            takevalue("/");
            })
            igual.addEventListener("click",function(){
                takevalue()
                })
                deleteN.addEventListener("click",function(){
                    takevalue()
                    })