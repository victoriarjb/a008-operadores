const A = 5>20 && 5<2
console.log (`5 é maior que 20 e também é menor que 2 - ${A}`)

const B = 5===5 || 5==="5"
console.log (`5 é igual a 5 ou é igual a “5” - ${B}`) 

const C = !(20>50)
console.log (`negação de (vinte é maior que cinquenta) -  ${C}`)

const D = !(20>50 || 50>60)
console.log (`negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta) - ${D}`)

