function deepCopy(struct) {
    return !Array.isArray(struct) && typeof struct == "object" ? Object.fromEntries( Object.entries(struct).map(v => v.map(vv => deepCopy(vv))) ) : (Array.isArray(struct) ? struct.map(v => deepCopy(v)) : struct);
}

let example_object = {a: 1, b : "asd", c: [1, {d: 2}]};
let expected = {a: 1, b : "asd", c: [1, {d: 2}]};

let copy = deepCopy(example_object);

copy.a = 2;
copy.b = "dsa";
copy.c[0] = 2;
copy.c[1].d = 3;

console.assert(example_object.a === expected.a && example_object.b === expected.b && example_object.c[0] === expected.c[0] && example_object.c[1].d === expected.c[1].d, "The original object was modified, thus there was no deep copy.");

console.log(deepCopy({a:{a:2}}));