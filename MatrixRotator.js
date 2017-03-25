const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor( matrix ) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate (direction) {
    // do work here
    let PA = this.matrix;
    let NewPA = [];
    if(direction === Direction.CW ){
      for (let i = 0; i <= PA.length-1; i++){
        let NewCA = [];
        NewPA.push(NewCA);
        for (let j = PA.length-1; j >= 0; j--){ 
          NewCA.push(PA[j][i]);
        }
      }
      this.matrix = NewPA;
    }else if (direction === Direction.CCW){
      for (let i = 0; i <= PA.length-1; i++){
      let NewCA = [];
      NewPA.unshift(NewCA);      
        for (let j = PA.length-1; j >= 0; j--){ 
          NewCA.unshift(PA[j][i]);
        }
      }
    }
    this.matrix = NewPA;
  }
};