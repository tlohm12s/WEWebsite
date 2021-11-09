class Node {
    constructor(name, dependencies) {
        this.name = name;
        this.dependencies = dependencies;
    }
}

class Vorrang {
    constructor(dependencies) {
        dependencies = JSON.parse(JSON.stringify(dependencies));

        let object_types = new Set();
        this.nodes = [];

        //Collect dependency names
        dependencies.forEach(element => {
            if(!object_types.has(element[0])) object_types.add(element[0]);
            if(!object_types.has(element[1])) object_types.add(element[1]);
        });

        //Invert dependencies
        dependencies = dependencies.map(pairs => [pairs[1], pairs[0]]);

        //Create Nodes with their Dependencies
        object_types.forEach(object_type => {
            let node_dependencies = [];

            dependencies.forEach(dependency => {
                if(object_type === dependency[0]) node_dependencies.push(dependency[1]);
            });

            this.nodes.push(new Node(object_type, node_dependencies));
        });
    }

    [Symbol.iterator]() {
        let that = this;
        let sorted, last_sorted;  

        let i = 0;

        return {
            next() {
                if (that.nodes.length == 0) {
                    return {
                        value : undefined, 
                        done: true
                    }          
                }

                for(i; true; i++) {

                    if(i >= that.nodes.length ) {i = 0; if(sorted !== last_sorted) break;};

                    if(that.nodes[i].dependencies.length === 0) {
                        sorted = that.nodes[i].name;

                        that.nodes.forEach(node => { 
                            if(node.dependencies.includes(that.nodes[i].name)) {
                                node.dependencies = node.dependencies.filter(dependency => dependency !== that.nodes[i].name);
                            }
                        });

                        that.nodes = that.nodes.filter(node => node !== that.nodes[i]);

                        i++;
                        break;
                    }
                }

                last_sorted = sorted;

                return {
                    value : sorted, 
                    done: false
                }
            }
        }
    }
}

const test = new Vorrang([["unterhose", "hose"], ["unterhemd", "pullover"], ["socken", "schuhe"],["pullover", "mantel"],["hose", "mantel"],["hose", "schuhe"]]);

let log = [];

const handler = {
    i: 0,
    get: function(obj, prop) {

        if(prop == "nodes") {
            this.i++;
            log.push({steps: this.i, left: obj.nodes.length});
        } 
        return obj[prop];
    }
};
  
const proxy = new Proxy(test, handler);

let expected = [
    'unterhose',
    'unterhemd',
    'socken',
    'hose',
    'schuhe',
    'pullover',
    'mantel'
];

let result = [];

for (const i of proxy) {
    result.push(i);
}

let counter = 0;
for (const message of log) {
    console.log(message);
}

console.assert(JSON.stringify(result) === JSON.stringify(expected), JSON.stringify({expected: expected, actual: result}));
console.assert(log.length == 109, JSON.stringify({actual: log.length, expected: 109}));
console.assert(log[0].left == 7, JSON.stringify({actual: log[0].left, expected: 7}));
console.assert(log[log.length-1].left == 0, JSON.stringify({actual: log[log.length-1].left, expected: 0}));
