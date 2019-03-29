
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

let thingsToDo = {
    morning: "Exercise",
    afternoon: "Work",
    evening: "Code",
    night: ["Sleep", "Dream"]
};

let {morning, afternoon} = thingsToDo;
morning = 'Run'

console.log(morning, ' - ', afternoon);


let uniStudent = student => {

}




















