const produtos =  [
    { nome: "notebook", preco: 5.000, fragil: true },
    { nome: "ipad", preco: 3.000, fragil: false },
    { nome: "celular", preco: 2.000, fragil: true },
    { nome: "geladeira", preco: 15.000, fragil: true },
    { nome: "capinha", preco: 20.00, fragil: false }
]

console.log(produtos.filter(function(p) {  
    return false
}))

const caro = produtos => produtos.preco >= 100
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))