let basicCard = function(front, back, err) {
  if(err) throw err;
  if(this instanceof basicCard) {
    this.front = front,
    this.back = back
}
  else {
  return new basicCard(front, back)
 }
}
module.exports = basicCard;
