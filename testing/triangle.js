class Triangle {
  constructor(side1, side2, side3) {
    if(validTriangle(side1, side2, side3)){
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
    else {
      throw new Error("Error!!");
    }
  }
  kind(){
    if (this.side1 === this.side2 && this.side2 === this.side3) {
      return "equilateral";
    }
    else if (this.side1 === this.side2 && this.side2 !== this.side3 && this.side1 !== this.side3) {
      return "isosceles";
    }
    else if (this.side1 === this.side3 && this.side2 !== this.side3 && this.side1 !== this.side2) {
      return "isosceles";
    }
    else if (this.side2 === this.side3 && this.side2 !== this.side1 && this.side1 !== this.side3){
      return "isosceles"
    } 
    else if (this.side1 !== this.side2 && this.side2 !== this.side3 && this.side1 !== this.side3) {
      return "scalene";
    }

  }
}
function validTriangle(side1, side2, side3) {
  if(side1 <=0 || side2 <= 0 || side3 <= 0){
    return false;
  }
  if ((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side1 + side3 <= side2)){
    return false;
  }
  return true;
}

module.exports = Triangle;