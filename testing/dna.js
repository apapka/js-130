function DNA(string){
  this.dna = string;

}
DNA.prototype.hammingDistance = function(string){
  // console.log(this.dna);
  if (this.dna === string) {
    return 0;
  } 
  else {
    let count = 0;
    let length = this.dna.length; 
    if (string.length < length) {
      length = string.length;
    }
    for (let i = 0; i < length; i ++) {
      if (this.dna[i] !== string[i]){
        count += 1;
      }
    }
    return count;

  }
}
module.exports = DNA;