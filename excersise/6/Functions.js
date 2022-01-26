function identity(argument) {
	return argument;
}

function identity_function(argument) {
	return function(){return argument;};
}

function add(a, b) {
    return a+b;
}
  
function mul(a, b) {
return a*b;
}

function addf(a) {
    return function(b){return a+b;};
}

function applyf(func) {
    return function(a) {return function(b){ return func(a,b);}};
}

console.log(identity(1));
console.log(identity_function(2)());

console.log(addf(1)(2));
console.log(applyf(mul)(2)(2));