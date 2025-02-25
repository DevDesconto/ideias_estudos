let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

const tempVarA = varA // reservei o valor de varA

varA = varB // B
varB = varC // C
varC = tempVarA // B

// ou [varA, varB, varC] = [ varB, varC, va] 

console.log(varA, varB, varC);
