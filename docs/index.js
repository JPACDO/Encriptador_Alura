
const encriptar = ()=>{
    const inputText = document.getElementById('inputText').innerText;

    // patron = /[A-Za-z0-9]/;
    patron = /^[a-z\s]+$/;
    if (inputText.match(patron) === null){
        alert('Verifica que tu mensaje no contenga mayúsculas, acentos, números o caracteres especiales')

        return null;
    }



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