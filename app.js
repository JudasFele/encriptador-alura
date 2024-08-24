// let letrasPermitidasAscii = [32,97,98,99,100,101,102,103,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122]; //minusculas sin acento y espacio
let textoIngresado = 0;
// let textoEncriptado = [];
// let textoIngresadoAscii = [];
// let letras = [];


function buttonEncriptar(){
    if (document.getElementById("cajaIngresarTexto").value != ""){
        validarTextoMinusculas();
        encriptar();
    } else{
        alert("Por favor ingrese el texto en minusculas sin acentos y números")
    }
}

function butttonDesencriptar(){
    if (document.getElementById("cajaIngresarTexto").value != ""){
        validarTextoMinusculas();
        desencriptar();       
    } else{
        alert("Por favor ingrese el texto en minusculas sin acentos y números")
    }
}

function buttonCopiar(){
    let copyText = document.getElementById("salidaTextoAqui");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
     
}



function validarTextoMinusculas(){
    let textoIngresado = document.getElementById("cajaIngresarTexto").value;

    //convertir el texto a una lista en ascii
    for (let i = 0; i<textoIngresado.length; i++){

        if(textoIngresado[i]== " " || isNaN(textoIngresado[i])){

            if(textoMinusculas(textoIngresado[i])){
                                
                if(textoIngresado.length-1 == i){
                    
                    // encriptar();
                    return true;
                    
                }

            }else{
                alert("Por favor solo ingresar minusculas y sin acentos");
                borrarTexto();
                break;
            }

     
        }else{
            alert("Por favor no ingresar números, solo ingresar letras minusculas");
            borrarTexto();
            break;
        }
    }
}


function textoMinusculas(letra){
    
    return (letra === letra.toLowerCase() && letra.charCodeAt() <= 122);
    // return (letra === letra.toLowerCase());      ---> Por si algo sale mal, Utilizar este
}


function encriptar(){
  
   let textoIngresado = document.getElementById("cajaIngresarTexto").value;

    let textoAEncriptar = textoIngresado.replaceAll(/a|e|i|o|u/gi, 
            function cambiarLetra(x){
            let aLetra = "ai";
            let eLetra = "enter";
            let iLetra = "imes";
            let oLetra = "ober";
            let uLetra = "ufat";

            if (x === "a"){
                return(aLetra);
            }

            if (x === "e"){
                return(eLetra);
            }

            if (x === "i"){
                return(iLetra);
            }

            if (x === "o"){
                return(oLetra);
            }

            if (x === "u"){
                return(uLetra);
            }
                    
        }
    );
    // return textoAEncriptar;
    // console.log(textoAEncriptar);
    document.getElementById("salidaTextoAqui").innerHTML = textoAEncriptar;
}



function desencriptar(){
    
    let textoIngresado = document.getElementById("cajaIngresarTexto").value;

    let textoADesencriptar = textoIngresado.replaceAll(/ai|enter|imes|ober|ufat/gi, 
        function cambiarLetra(x){
        let aLetra = "a";
        let eLetra = "e";
        let iLetra = "i";
        let oLetra = "o";
        let uLetra = "u";

        if (x === "ai"){
            return(aLetra);
        }

        if (x === "enter"){
            return(eLetra);
        }

        if (x === "imes"){
            return(iLetra);
        }

        if (x === "ober"){
            return(oLetra);
        }

        if (x === "ufat"){
            return(uLetra);
        }
        }
    );

    console.log(textoADesencriptar);
    document.getElementById("salidaTextoAqui").innerHTML = textoADesencriptar;
}



function borrarTexto(){
    document.getElementById("cajaIngresarTexto").value="";
    document.getElementById("salidaTextoAqui").value="";
}