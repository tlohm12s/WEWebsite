const add = (x : number, y : number) : number => x+y;
const equals = (x: number, y: number) : boolean => x===y;

console.log( add(1,2) );
console.log( add(true, true ) );
console.log( add(true, false ) );
var x = y = 1;
console.log( add(equals(x,y), equals(y,x)) );