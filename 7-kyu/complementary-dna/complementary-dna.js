function DNAStrand(dna) {
  let complementarySide = "";
​
  for (let i = 0; i < dna.length; i++) {
    let letter = dna[i];
​
    if (letter === "A") {
      complementarySide += "T";
    } else if (letter === "T") {
      complementarySide += "A";
    } else if (letter === "C") {
      complementarySide += "G";
    } else if (letter === "G") {
      complementarySide += "C";
    }
  }
​
  return complementarySide;
}
​
// Examples:
console.log(DNAStrand("ATTGC")); // Output: "TAACG"
console.log(DNAStrand("GTAT"));  // Output: "CATA"
​