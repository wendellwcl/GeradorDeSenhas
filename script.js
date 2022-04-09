const caracteresNumeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const caracteresMinusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm',
                              'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const caracteresMaiusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                                'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const caracteresEspeciais = ['!' , '?', '@', '#', '$', '%', '&', '*', '-', '_', '+', '=', '/', '.'];

function gerar(){
    const numeros = document.querySelector('#numeros').checked;
    const minusculas = document.querySelector('#minusculas').checked;
    const maiusculas = document.querySelector('#maiusculas').checked;
    const especiais = document.querySelector('#especiais').checked;

    let caracteres = [];

    if(numeros){
        caracteres = [...caracteres, ...caracteresNumeros];
    };

    if(minusculas){
        caracteres = [...caracteres, ...caracteresMinusculas];
    };

    if(maiusculas){
        caracteres = [...caracteres, ...caracteresMaiusculas];
    };

    if(especiais){
        caracteres = [...caracteres, ...caracteresEspeciais];
    };

    console.log(caracteres);

    const resultado = document.querySelector('#resultado');
    resultado.setAttribute('value', 'teste');
};