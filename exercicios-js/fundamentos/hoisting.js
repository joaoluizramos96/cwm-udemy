console.log("a =", a);
var a = 2; // hoisting = pode declarar alguns componentes depois de "chamá-las"
console.log("a =", a);

console.log("b =", b); // vai dar erro, pois o efeito do hoisting não funciona com variáveis do tipo let
let b = 2;
console.log("b =", b);