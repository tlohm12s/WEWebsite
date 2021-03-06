function identity_function(x) {
    return f => x;
}

function addf(x) {
    return y => x+y;
}

function add(x, y) {
    return x+y;
}

function mul(x, y) {
    return x*y;
}

function applyf(func) {
    return a => b => func(a,b);
}

function curry(func, a) {
    return b => func(a, b);
}

function inc(x) {
    return addf(x)(1);
}

function inc2(x) {
    return applyf((a,b) => a+b)(x)(1);
}

function inc3(x) {
    return curry((a,b) => a+b, x)(1);
}

function methodize(func) {
    return function(x) {
        return func(this.valueOf(), x);
    };
}

function demethodize(func) {
    return function (x,y) {
        this.valueOf = function() {
            return x;
        }
        return func(y);
    };
}

function twice(func) {
    return x => func(x, x);
}

var double = twice(add);
var square = twice(mul);

function composeu(func1, func2) {
    return x => func2(func1(x));
}

function composeb(func1, func2) {
    return (x, y, z) => func2(z, func1(x, y));
}

function once(func) {
    return function a(...parameters) {
        if(a.called) throw new Error();
        a.called = true;
        return func(...parameters);
    };
}

function counterf(x) {
    return { inc : f1 => x+1, dec: f2 => x-1};
}

function vector() {
    let array = [];
    let index = 0;

    return { 
        append: 
            function(x){
                array[index++] = x;
            }, 
        store:
            function(i, x){
                array[i] = x;
            },
        get: i => array[i]};
}

function revocable(func) {
    return function a() {
            a.revoked = false;

            return {
                invoke: function(...params) {if(a.revoked) {throw new Error();} else {return func(...params);}},
                revoke: function() {a.revoked = true;}
            }
    }();
}

console.log(identity_function(1)());
console.log(applyf(add)(1)(1));
console.log(curry(add,1)(2));
console.log(inc(3));
console.log(inc2(4));
console.log(inc3(5));
console.log(double(4));
console.log(composeu(add, mul)(5));
console.log(composeb(add, mul)(5));

let v = vector();
v.append(100);
console.log(v.get(0));

Number.prototype.add = methodize(add);

console.log(demethodize(Number.prototype.add)(1,2));

try { 
    let oncef = once(add);
    console.log(oncef(7, 7));
    oncef(1,2);
} catch (e) {
    console.log(e);
}

try { 
    let a = revocable(mul);
    console.log(a.invoke(3,3));
    console.log(a.revoke());
    console.log(a.invoke(3,3));
} catch (e) {
    console.log(e);
}