const alunos = [
    {nome: 'joão', nota: 7.5, bolsista: false},
    {nome: 'maria', nota: 7.1, bolsista: false},
    {nome: 'pedro', nota: 2.5, bolsista: false},
    {nome: 'jose', nota: 5.5, bolsista: false},
    {nome: 'carlos', nota: 8.0, bolsista: false},
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
},0)

console.log(resultado)