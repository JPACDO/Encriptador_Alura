
// btnEncriptar = document.getElementById("#encriptar");
// btnDesencriptar = document.getElementById("#desencriptar");
// btnDesencriptar = document.getElementById("#desencriptar");

// resultadoMsg = document.getElementById("#resultadoMsg");
// copiar = document.getElementById("#copiar");

function vowelTest(s) {
    return (/^[aeiou]$/i).test(s);
  }

const encriptar = ()=>{
    const inputText = document.getElementById('inputText').innerText;
    let texto = inputText.toLowerCase();
    console.log(texto)
    var solution = "";

    for (let i = 0; i < texto.length; i++) {
        var letra = texto[i];
        switch (texto[i]) {
            case 'e':
                letra = "enter";
                break;
            case 'i':
                letra = "imes";
                break;
            case 'a':
                letra = "ai";
                break;
            case 'o':
                letra = "ober";
                break;
            case 'u':
                letra = "ufat";
                break;
            default:
                break;
        }
    
        solution = solution + letra;
    }

    resultadoMsg(solution);

  
}

const desencriptar = ()=>{
    const inputText = document.getElementById('inputText').innerText;
    let texto = inputText.toLowerCase();
    console.log(texto)
    var solution = texto;
    solution = solution.replaceAll("enter","E");
    solution = solution.replaceAll("imes","I");
    solution = solution.replaceAll("ai","A");
    solution = solution.replaceAll("ober","O");
    solution = solution.replaceAll("ufat","U");
    solution = solution.toLowerCase();
    resultadoMsg(solution);
}


const resultadoMsg = (result)=>{
    const contenidoA = document.getElementById("contenidoA").classList.add("oculto");
    const contenidoB = document.getElementById("contenidoB").classList.remove("oculto");;
    const resultado = document.getElementById('resultadoMsg');
    resultado.innerText = result;
    // copiarAlPortapapeles('resultadoMsg');
}


function copiar() {
    const id_elemento = 'resultadoMsg';

    var text = document.getElementById(id_elemento).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    // navigator.clipboard.writeText('text to be copied');
    document.body.removeChild(elem);
    alert('Mensaje Copiado');
  
  }