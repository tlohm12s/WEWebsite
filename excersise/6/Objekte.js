let personen = [];

function Person(name, autos) {
    this.name = name;
    this.autos = autos;
    personen.push(this);
}

function Auto(kennzeichen) {
    this.kennzeichen = kennzeichen;
}

function conflict() {

    //Jede Person mit jedem
    for(let i = 0; i < personen.length; i++) {
        for(let j = i+1; j < personen.length; j++) {
            
            let intersection = personen[i].autos.filter(auto => personen[j].autos.includes(auto));
            if(intersection.length > 0) return true;

        }   
    }

    return false;
}

let auto1 = new Auto("abc-123");
let auto2 = new Auto("abc-124");
let auto3 = new Auto("abc-125");

let person1 = new Person("Peter", [auto1]);
let person2 = new Person("Hans", [auto1, auto2]);

console.log(conflict());

personen = [];
let person3 = new Person("Peter", [auto1]);
let person4 = new Person("Hans", [auto2]);

console.log(conflict());