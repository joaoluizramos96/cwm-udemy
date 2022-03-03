function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log("Aprovado com " + nota);
    };
};

soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdade(valor){
    if (valor){
        console.log("É verdade... " + valor);
    };
};

seForVerdade(); // É falso
seForVerdade(null); // É falso
seForVerdade(undefined); // É falso
seForVerdade(NaN); // É falso
seForVerdade(""); // É falso
seForVerdade(0); // É falso (?????)
seForVerdade(-1); // É verdadeiro
seForVerdade(" "); // É verdadeiro
seForVerdade("?"); // É verdadeiro
seForVerdade([]); // É verdadeiro
seForVerdade([1, 2]); // É verdadeiro
seForVerdade({}); // É verdadeiro