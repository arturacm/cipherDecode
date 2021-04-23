// var chave = document.getElementById("key")
// document.getElementById("key").defaultValue = 0;
function changeCipher(){
    if(document.getElementById("selectCipher").value == "caesar"){
        document.getElementById("caesar").style.display = "flex";
        document.getElementById("base64").style.display = "none";
        
    }
    else if(document.getElementById("selectCipher").value == "base64"){
        
        document.getElementById("base64").style.display = "flex";
        document.getElementById("caesar").style.display = "none";

    }else{

        document.getElementById("caesar").style.display = "none";
        document.getElementById("base64").style.display = "none";
    }


}

function codeOrDecode(){
    var radioSel = document.getElementById("radioCod");
    var chave = document.getElementById("key");
    var key = parseInt(chave.value);
    key = key%26;
    console.log(radioSel.value );
    if (document.getElementById('decod').checked){
        key = (-1)*key
    }
    codeCaesar(key);
}

function codeCaesar(key){
    var entrada = document.getElementById("inputCaesar").value;
    var saida = document.getElementById("CaesarResult"); 
    var decod = "";
    saida.innerHTML = "";

    for (var i = 0; i < entrada.length; i++ ){
        decod = entrada.charCodeAt(i);
        
        //letra é minustula
        if (decod>=97 && decod<= 122){
            decod = decod + key;
            if (decod> 122){
                decod = decod - 26;
            }else if(decod< 97){
                decod = decod + 26;
            }
        }
        //letra é maiucula
        if (decod>=65 && decod<= 90){
            decod = decod + key;
            if (decod> 90){
                decod = decod - 26;
            }else if(decod<65){
                decod = decod + 26;
            }
        }
        saida.innerHTML += String.fromCharCode(decod);
    }
    
}

function base64CodeNDecode(){

    var entrada = document.getElementById("inputBase64").value;
    var saida = document.getElementById("base64Result"); 
    
    var radioSel = document.getElementById("radioCod");
   
    console.log(radioSel.value );
    if (document.getElementById('decod').checked){
        saida.innerHTML = atob(entrada);
    }
    else{
        console.log(btoa(entrada))
        
        saida.innerHTML = btoa(entrada);

    }
    
}