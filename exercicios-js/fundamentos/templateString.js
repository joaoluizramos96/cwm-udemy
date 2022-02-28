const nome = "Rebeca";
const concatenacao = "Olá " + nome + "!";
const template = `
    Olá
    ${nome}!`;
console.log(concatenacao, template);

// Expressões
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase(); // Função para deixar as letras maiúsculas
console.log(`Ei... ${up("cuidado")}!`);