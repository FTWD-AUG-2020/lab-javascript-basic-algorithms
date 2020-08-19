// Iteration 1: Names and Input
let hacker1 = `Ashtyn`

console.log(`The Driver's name is ${hacker1}.`)

let hacker2 = "Rebecca"

console.log(`The Navigator's name is ${hacker2}.`)



// Iteration 2: Conditionals
if (hacker1.length> hacker2.length){
    console.log(`${hacker1}has the longest name it has ${hacker1.length} characters`)
}
else if (hacker1.length< hacker2.length) {
    console.log(`It seems ${hacker2} has the longest name it has ${hacker2.length} characters`)
}
else {
    console.log(`wow you both have equally long names, you both have ${hacker1.length} characters`)
}

// Iteration 3: Loops

console.log(hacker1.split("").join(" ").toUpperCase())

console.log(hacker2.split("").reverse().join(""))

if(hacker1.localeCompare(hacker2) === -1){
    console.log(`The driver's name goes first`)
  } else if (hacker1.localeCompare(hacker2) === 1){
    console.log(`Yo, the navigator goes first definitely.`)
  } else {
    console.log(`What?! You both have the same name?`)
  }
