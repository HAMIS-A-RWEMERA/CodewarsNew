function reverseWords(str) {
let Reversed = str.split(" ").map(words=> words.split("").reverse().join("")).join(" ")
return Reversed
}