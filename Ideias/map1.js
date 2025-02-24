const carrinho = [
    '{ "nome": "lapiseira", "preco": 2.50}',
    '{ "nome": "lapis", "preco": 1.50}',
    '{ "nome": "caneta", "preco": 1.99}',
    '{ "nome": "borracha", "preco": 1.00}',
    '{ "nome": "caderno", "preco": 25.90}',
    '{ "nome": "mochila", "preco": 79.99}',
]

//Retornar um array apenas com os preços 

const paraObjeto = json => JSON.parse(json)
const apenasPreço = produto => produto.preço

const resultado = carrinho.map(paraObjeto)

console.log(resultado)

