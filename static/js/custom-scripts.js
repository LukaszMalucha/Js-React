
// ES6 BASICS


// Create Variable
//const name = "Lukasz";
//
//alert(name);
//
//// Using Let is recommended - exists only in function context
//
//if(true) {
//    let name = "Lukasz";
//    alert(name);
//}

//
//// Template string
//
//let fname = "Lukasz";
//
//let lname = 'M';
//
//let age = prompt("Guess Lukasz's age..");
//
//// OLD WAY
////let result = fname + ' ' + lname + ' ' + age + ' years old';
////alert(result);
//
//// NEW WAY with back ticks
//let result = `${fname} ${lname} is ${age} years old`;
//alert(result);
//



// Default Parameters
//
//function welcome(user="Guest", message="Welcome") {
//    alert(`Hello ${user}, ${message}`);
//}
//
//welcome("Ryan", 'Good morning');


// ARROW FUNCTIONS


//
//let gretting = (message) => alert(`${message} everyone!`);
//
//gretting('Good morning');
//
//
//let createBlog = (title, body) => {
//    if (!title) {
//        throw new Error('Title is required');
//    }
//
//    if (!body) {
//        throw new Error('Body is required');
//    }
//
//    return alert(`${title} - ${body}`);
//}
//
//createBlog('Title', 'Lorem');

// ARROW FUNCTION + THIS
// This refers to window object

//let nepal = {
//    mountains:['Everest', 'Fish Tail', 'Annapurna'],
//    printWithDash: function(){
//        setTimeout(() => console.log(this.mountains.join(" - ")), 3000);
//    }
//
//}
//
//alert(nepal.mountains);
//nepal.printWithDash();


// OBJECT DESTRUCTURING

//let thingsToDo = {
//    morning: "Exercise",
//    afternoon: "Work",
//    evening: "Code",
//    night: ["Sleep", "Dream"]
//};
//
//let {morning, afternoon} = thingsToDo;
//morning = 'Run'
//
//console.log(morning, ' - ', afternoon);
//
//
//let uniStudent = ({name, university}) => {
//    console.log(`${name} from ${university}`)
//};
//
//uniStudent({
//    name: 'Lukasz',
//    university: 'University of Life'
//});
//
//

//// DESTRUCTURING ARRAY
//
//let [firstMountain] = ['Everest', 'Fish Tail', 'Annapurna'];
//let [, secondMountain] = ['Everest', 'Fish Tail', 'Annapurna'];
//let [, , thirdMountain] = ['Everest', 'Fish Tail', 'Annapurna'];
//console.log(firstMountain);
//console.log(secondMountain);
//console.log(thirdMountain);
//



// RESTRUCTURING

//var adventureClimbing = {
//    nam: 'Evererst',
//    height: 8848,
//    output() {
//        console.log(`Mt. ${this.name} is ${this.height} meter tall`);
//    }
//};
//
//adventureClimbing.output();


// SPREAD OPERATOR

//var mountains = ['Everest', 'Fish Tail', 'Annapurna'];
//var mountainsJapan = ['Fuji'];
//
//var allMountains = [...mountains, ...mountainsJapan];
//console.log(allMountains);
//
//var day = {
//    breakfast: 'toast with milk',
//    lunch: 'rice with chicken curry'
//}
//
//var night = {
//    dinner: 'noodle soup'
//}
//
//var picnic = {...day, ...night};
//
//console.log(picnic);
//
//
//var letters = ['a', 'b', 'c'];
//var[first, ..,rest] = rivers;
//
//console.log(rest);


// CLASSES

// parent class
class Holiday {
    constructor(destination, days){
        this.destination = destination
        this.days = days
    }

    info() {
        console.log(`${this.destination} will take ${this.days} days.`);
    }
}

const trip = new Holiday("Nepal" , 30);
console.log(trip.info());


// child class

class Expedition extends holiday {
    constructor(destination, days, gear) {
        super(destination, days);
        this.gear = gear;
    }

    info() {
        super.info();
        console.log(`Bring your ${this.gear.join(" and your")}`)
    }
}

const tripWithGear = new Expedition("Everest", 30, ["Sunglasses", "Flags", "Camera"]);
tripWithGear.info();











