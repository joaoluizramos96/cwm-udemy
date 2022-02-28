{
    {
        {
            {
                var sera = "Será???"; // É visível dentro ou fora do bloco
                console.log(sera);
            }
        }
    }
};
console.log(sera);

function teste() {
    var local = 123;
    console.log(local); // Visível apenas dentro da função
};

teste();
console.log(local); // Não é visível fora da função