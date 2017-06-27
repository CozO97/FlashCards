let clozeCard = function(text, cloze, err) {
  if(err) throw err;
  if(this instanceof clozeCard) {
    this.partial = ("-------" + text.split(cloze)),
    this.fullText = text,
    this.cloze = cloze
  }
   else{
     return new clozeCard(text, cloze)
   }
}

module.exports = clozeCard;
