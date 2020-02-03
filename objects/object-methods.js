"use strict";

let calculator = {

  read() {
    this.fst = +prompt("Enter first value: ", 0);
    this.snd = +prompt("Enter second value: ", 0);
  },
  
  sum() {
    return this.fst + this.snd;
  },
  
  mul(){
    return this.fst * this.snd;
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this; // returning the object allows chaining of calls
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().up().down().showStep(); // 1

alert(isEmpty(ladder)); // can use function from the previous script