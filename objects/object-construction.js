"use strict";

function Accumulator(startingValue){
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt("Enter a value: ", 0);
    };
}

let acc = new Accumulator(1);

acc.read();
acc.read();

alert(acc.value);
