const nomePessoa = "Albert";
const idadePessoa = "16";
const acompanhantePessoa = false;

if (idadePessoa >= 18){
    console.log(`Maior de Idade, Seja Bem vindo, ${nomePessoa}`)
}

else if(idadePessoa < 18 && acompanhantePessoa == false) {
    console.log (`${nomePessoa} , você não pode entrar na festa sem acompanhante`)
}

else{
    console.log(`Menor de idade, Bem vindo ${nomePessoa}`)
}

