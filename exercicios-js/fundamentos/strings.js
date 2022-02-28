const escola = "Cod3r";

console.log(escola.charAt(4)); // Localizar o índice de uma determinada string 
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3)); // Valor na tabela ASCII / Unicode
console.log(escola.indexOf("3")); // Localizar a string em um determinado índice

console.log(escola.substring(1)); // Exibir saída a partir de um determidado índice
console.log(escola.substring(0, 3)); // Exibir uma "range" de índices, exceto o índice final indicado

console.log("Escola ".concat(escola).concat("!")); // Concatenando a partir de um literal
console.log(escola.replace(3, "e")); // Substituindo o item de um índice - replace(indice, item-a-substituir)

console.log("Ana,Maria,Pedro".split(",")); // Criando array e separando cada item por ","
