var example_data = JSON.parse('{"Niedersachsen" : { "inzidenz" : 206.8 }, "Hamburg" : { "inzidenz" : 203.2}, "Nordrhein-Westfalen" : { "inzidenz" : 282.7 }');
function sum(values) {
    return values.reduce(function (previous, current) { return previous + current; }, 0);
}
function min(values) {
    return 0;
}
function max(values) {
    return values.reduce(function (previous, current, i, array) { if (array[i] > previous)
        return array[i]; }, 0);
}
function avg(values) {
    return sum(values) / values.length;
}
console.log(max([3, 1, 2]));
