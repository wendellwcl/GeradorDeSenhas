const caracteresNumeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const caracteresMinusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm',
                              'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const caracteresMaiusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                                'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const caracteresEspeciais = ['!' , '?', '@', '#', '$', '%', '&', '*', '-', '_', '+', '=', '/', '.'];


/*Verificando e manipulando a quantidade mínima e máxima*/
function verificarQuantidade(){
    const elemento = document.querySelector('#quantidade')
    const quantidade = Number(elemento.value);
    
    if(quantidade > 32){
        elemento.value = 32;
    };

    if(quantidade < 6){
        elemento.value = 6;
    };
};


/* Checar caracteres selecionados */
function caracteresSelecionados(){
    const numeros = document.querySelector('#numeros').checked;
    const minusculas = document.querySelector('#minusculas').checked;
    const maiusculas = document.querySelector('#maiusculas').checked;
    const especiais = document.querySelector('#especiais').checked;
    return([numeros, minusculas, maiusculas, especiais]);
}


/*Gerando a senha*/
function gerar(){
    const quantidade = document.querySelector('#quantidade').value;
    const [ numeros, minusculas, maiusculas, especiais ] = caracteresSelecionados();
    let caracteres = [];
    let senha = [];
    
    
    function sortearCaractere(classe){
        const i = Math.floor(Math.random() * classe.length);
        const caractere = classe[i];
        inserir(caractere);
    };
    
    function inserir(caractere){
        const x = Math.floor(Math.random() * 2);
        if(x == 1){
            senha.push(caractere);
        } else{
            senha.unshift(caractere);
        };
    };
    

    if(numeros){
        caracteres = [...caracteres, ...caracteresNumeros];
        sortearCaractere(caracteresNumeros);
    };

    if(minusculas){
        caracteres = [...caracteres, ...caracteresMinusculas];
        sortearCaractere(caracteresMinusculas);
    };

    if(maiusculas){
        caracteres = [...caracteres, ...caracteresMaiusculas];
        sortearCaractere(caracteresMaiusculas);
    };

    if(especiais){
        caracteres = [...caracteres, ...caracteresEspeciais];
        sortearCaractere(caracteresEspeciais);
    };

    for(let i = senha.length; i < quantidade; i++){
        sortearCaractere(caracteres);
    };

    const resultado = document.querySelector('#resultado');
    resultado.value = senha.join('');
};


/*Copiando o resultado gerado*/
function copiarTexto() {
    const copiar = document.querySelector('#resultado');
    copiar.select();
    copiar.setSelectionRange(0, 99999);
    document.execCommand("copy");
};


/*Garantindo o estado inicial esperado*/
function estadoInicial(){
    document.querySelector('#quantidade').value = 6;

    document.querySelector('#numeros').checked = true;
    label('numeros');
    document.querySelector('#minusculas').checked = true;
    label('minusculas');
    document.querySelector('#maiusculas').checked = true;
    label('maiusculas');
    document.querySelector('#especiais').checked = false;
    label('especiais');

    document.querySelector('#resultado').value = '';
}


/*Controle do estilo dos botões de caracteres & do texto do botão #btn-gerar de acordo com os checkboxes*/
function label(id){
    /* Alterando o estilo visual (botões dos caracteres) */
    const elemento = document.querySelector(`#${id}`);
    const label = document.querySelector(`#label-${id}`);
    
    if(elemento.checked){
        label.style.border = '1px solid transparent';
        label.style.color = '#FFFFFF';
        label.style.backgroundColor = '#3C97FF';
    } else{
        label.style.border = '1px solid #3C97FF';
        label.style.color = '#3C97FF';
        label.style.backgroundColor = '#FFFFFF';
    };

    /* Alterando o texto (#btn-gerar) */
    const [ numeros, minusculas, maiusculas, especiais ] = caracteresSelecionados();
    const btn = document.querySelector('#btn-gerar');

    if(!numeros && !minusculas && !maiusculas && !especiais){
        btn.innerHTML = 'Selecione um tipo de caractere';
    } else{
        btn.innerHTML = 'Gerar';
    };
};