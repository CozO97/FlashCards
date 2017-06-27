const basicCard = require('./basicCard.js');
const clozeCard = require('./clozeCard.js');


let hughJackman = new basicCard (
  "Which actor played the character of Logan?",
  "Hugh Jackman");
// Which actor played the character of Logan?
  console.log(hughJackman.front)
// Hugh Jackman
  console.log(hughJackman.back)

let hughJackmanCloze = new clozeCard(
  "Hugh Jackman played the character of Logan.",
  "Hugh Jackman"
);
//Hugh Jackman
console.log(hughJackmanCloze.cloze)
//------, played the character of Logan.
console.log(hughJackmanCloze.partial)
//Hugh Jackman played the character of Logan.
console.log(hughJackmanCloze.fullText)
