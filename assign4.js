
const val=process.argv
const cost = Number(val[2])
const percent = Number(val[3])
const amount = (percent / 100) * cost
const total = amount + cost
const final = `your meal cost goes $${cost} +  ${percent}% tip = ${total}`

console.log(final)