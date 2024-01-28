/*
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/

const entradaDeTexto = document.querySelector('.texto_entrada');

function criptografar(){
    let texto = entradaDeTexto.value;
    let textoCripto = texto.replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/e/g, 'enter').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    apagarTextoEImg();
    mostraTexto(textoCripto);
    console.log(textoCripto);
}

function descriptografar()  {
    let texto = entradaDeTexto.value;
    let textoDescriptografado = texto.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');;
    apagarTextoEImg();
    mostraTexto(textoDescriptografado);
    console.log(textoDescriptografado);
}

function mostraTexto(resultado) {
    document.querySelector('.saida').innerHTML = `
    <p id="texto_final" class="texto_final">${resultado}</p>`;
}

function apagarTextoEImg() {
    let texto = entradaDeTexto.value;
    document.querySelector('.saida').style.display = texto == '' ? 'none' : 'flex';
    document.querySelector('.saida_imgTexto').style.display = texto == '' ? 'flex' : 'none';
}