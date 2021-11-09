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

    
    * [Symbol.iterator]() {
        let nodes = this.nodes;

        //Sort
        while(nodes.length > 0) {
            for(let i = 0; i < nodes.length; i++) {
                if(nodes[i].dependencies.length === 0) {
                    yield nodes[i].name;

                    nodes.forEach(node => { 
                        if(node.dependencies.includes(nodes[i].name)) {
                            node.dependencies = node.dependencies.filter(dependency => dependency !== nodes[i].name);
                        }
                    });

                    nodes = nodes.filter(node => node !== nodes[i]);
                }
            }
        }
    }
}

const test = new Vorrang([["unterhose", "hose"], ["unterhemd", "pullover"], ["socken", "schuhe"],["pullover", "mantel"],["hose", "mantel"],["hose", "schuhe"]]);

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

for (const i of test) {
    result.push(i);
}

console.assert(JSON.stringify(result) === JSON.stringify(expected), {expected: expected, actual: result});
console.log(result);