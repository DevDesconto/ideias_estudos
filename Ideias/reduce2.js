const alunos = [
    {nome: 'joão', nota: 7.5, bolsista: true},
    {nome: 'maria', nota: 7.1, bolsista: false},
    {nome: 'pedro', nota: 2.5, bolsista: true},
    {nome: 'jose', nota: 5.5, bolsista: false},
    {nome: 'carlos', nota: 8.0, bolsista: false},
]

//todos alunos são bolsistas? 
const todosBolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsista))

//algun aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
 