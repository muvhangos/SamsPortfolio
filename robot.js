// 1: Awesome Animals
let animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
for (var i = 0; i < animals.length; i++) {
    animals[i] = `Awesome ${animals[i]}`;
};
console.log(animals)

// 2: Random String Generator
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let randomString = ""

while (randomString.length < 10){
    let index  = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[index];
}

console.log(randomString)

// 3: h4ck3r sp34k
var input = "javascript is awesome";
var output = "";

for (var i =  0; i < input.length; i++) {
    if (input[i] === "a"){
        output +=  "4";
    }
    else if (input[i] === "e"){
        output +=  "3";
    }
    else if  (input[i] === "i"){
        output += "1";
    }
    else if (input[i] === "o"){
        output += "0";
    }
    else {
        output += input[i];
    }
}

console.log(output)
