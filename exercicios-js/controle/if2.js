function teste1(num) {
    if (num > 7) // Sem chaves, só vai rodar apenas uma sentença
        console.log(num);

    console.log("Final");
};

// teste1(6);
// teste1(8);

function teste2(num){
    if (num > 7) { // NÃO USAR ; NA DEFINIÇÃO DE UMA ESTRUTURA IF
        console.log(num);
    };
};

teste2(6);
teste2(8);