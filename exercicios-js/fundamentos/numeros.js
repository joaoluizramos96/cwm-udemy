const peso1 = 1.0;
const peso2 = Number("2.0"); // Convertendo String para número

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media);
console.log(media.toFixed(2)); // Informando quantas casas decimais exibir
console.log(media.toString()); // Converter para String
console.log(media.toString(2)); // Converter para binário
console.log(typeof media); // Número
console.log(typeof Number); // Função