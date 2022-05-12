const body=document.querySelector("body");
const main=document.createElement("main");
const ProductList=document.createElement("ul");
const ProductItem1=document.createElement("li");
const ProductItem2=document.createElement("li");
const ProductItem3=document.createElement("li");
const ProductDetails=document.createElement("section");
const ButtonEnd=document.createElement("button");
const p=document.createElement("p");


ButtonEnd.innerText="Finalizar";

ProductDetails.append(p,ButtonEnd);
ProductList.append(ProductItem1,ProductItem2,ProductItem3);
main.append(ProductList,ProductDetails);
body.appendChild(main);
console.log(body);


let products=[
    {
        nome:"produto0",
        preco:5
    },
    {
        nome:"produto1",
        preco:10  
    },
    {
        nome:"produto2",
        preco:20
    }
];

const nomes1=document.createElement("p");
nomes1.innerHTML=products[0].nome;
ProductItem1.append(nomes1);
 

const nome2=document.createElement("p");
ProductItem2.append(nome2);
nome2.innerHTML=products[1].nome;


const nome3=document.createElement("p");
ProductItem3.append(nome3);
nome3.innerHTML=products[2].nome;

const preco0=document.createElement("p");
ProductItem1.append(preco0);
preco0.innerText=`Valor do ==> ${products[0].nome} = R$${products[0].preco},00`;
const preco1=document.createElement("p");
ProductItem2.append(preco1);
preco1.innerText=`Valor do ==> ${products[1].nome} = R$${products[1].preco},00`;
const preco2=document.createElement("p");
preco2.innerText=`Valor do ==> ${products[2].nome} = R$${products[2].preco},00`;
ProductItem3.append(preco2);

function operacao(){
    let valor=0;
    for(let i=0;i<products.length;i++){
        valor+=products[i].preco;
    }
    return valor
};

let soma= operacao();

p.innerText=`Total = ${soma}`;


