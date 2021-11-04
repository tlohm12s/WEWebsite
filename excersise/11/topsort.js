let dependencies = [];

function addDependency(from, to) {
    dependencies.push([from, to]);

    let bullet_point = document.createElement("li");
    bullet_point.appendChild(document.createTextNode(from + " -> " + to));

    let list = document.getElementById("relation_list");
    list.appendChild(bullet_point);
}

function Node(name, dependencies) {
    this.name = name;
    this.dependencies = dependencies;
}

function topsort(dependencies) {
    let object_types = [];
    let nodes = [];
    let sorted = [];

    for(const dependency of dependencies) {
        //Gather all Node Names
        for(const object_type of dependency) {
            for(const other_object_type of dependency) {
                if(!object_types.includes(other_object_type)) {
                    object_types.push(other_object_type);
                }
            }

        }

        //Invert them
        let tmp = dependency[1];
        dependency[1] = dependency[0];
        dependency[0] = tmp;
    }

    //Create Nodes with their Dependencies
    for(const object_type of object_types) {
        let node_dependencies = [];

        for(const dependency of dependencies) {
            if(object_type === dependency[0]) {
                node_dependencies.push(dependency[1]);
            }
        }

        nodes.push(new Node(object_type, node_dependencies));
    }

    let x = 0;
    //Sort
    while(nodes.length > 0) {
        x++;

        for(let i = 0; i < nodes.length; i++) {
            if(nodes[i].dependencies.length === 0) {
                sorted.push(nodes[i].name);

                for(let j = 0; j < nodes.length; j++) {
                    if(nodes[j].dependencies.includes(nodes[i].name)) {
                        nodes[j].dependencies.splice(nodes[j].dependencies.indexOf(nodes[i].name), 1);
                    }
                }

                nodes.splice(nodes.indexOf(nodes[i]), 1);
            }
        }

        if(x > 20) break;
    }
    
    return sorted;
}

function sort() {
    document.getElementById("sorted_list").innerHTML = "";
    let sorted = topsort(dependencies);

    for(let i = 0; i < sorted.length; i++) {
        let bullet_point = document.createElement("li");
        bullet_point.appendChild(document.createTextNode(sorted[i]));
    
        let list = document.getElementById("sorted_list");
        list.appendChild(bullet_point);
    }
}

function clearList() {
    dependencies = [];
    document.getElementById("relation_list").innerHTML = "";
}