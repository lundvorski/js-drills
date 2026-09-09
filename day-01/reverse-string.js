const word = "elephant";

function reverse(word) {
    let reversed = '';
    wordArray = Array.from(word);
    for(let i = word.length-1; i >= 0; i--) {
        reversed += wordArray[i];
    }
    return reversed;
}

console.log(reverse(word));