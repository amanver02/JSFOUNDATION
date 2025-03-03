const { type } = require("os");

let countdown = []
let j = 5 ; 
while(j>0){
    countdown.push(j);
    j--;
}
console.log(countdown);



let  teaCollection = []
let tea;
do {
tea = prompt('Enter you favourate tea (type"stop" to finish)');

if(tea  !=="stop"){
    teaCollection.push(tea);
}
} while (tea !== "stop");


