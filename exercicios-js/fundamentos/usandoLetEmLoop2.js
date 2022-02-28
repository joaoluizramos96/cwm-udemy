const funcs = [];

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    });
}

funcs[2]();
funcs[8](); funcs[8](); // Respeita a váriável, devido ao lance do escopo de bloco