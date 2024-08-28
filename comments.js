// This is comments example
/*
This os multi
line
comments
*/
// let x=10;
// let y=15;
// let result=x*y;
// console.log('result: '+result);
// let age=15;
// if(age>18){
//     console.log('Congragulations! you are eligible for driving licence');
// }
// else 
// {
//     console.log('you are not eligible');
// }
// let starRating=5;
// switch(starRating)
// {
//     case 1:
//         console.log('Very Bad' );
//         break;
//     case 2:
//         console.log('Bad' );
//         break;
//     case 3:
//         console.log('Average' );
//         break;
//     case 4:
//         console.log('Good' );
//         break;
//     case 5:
//         console.log('Execellent' );
//         break;
//     default:
//         console.log('Enter a valid Integer between 1 to 5' );
    
//     }
// 
//loopd/////////////

// let i;
// for(i=1; i<=10; i++){
//     let power=i*i;

//     console.log("power of " + i + " is "  + power);
// }
// let fruits =['Apple','Banana','Grapes','Pear'] 
//     let x;
//     for(x in fruits){
//         console.log(fruits[x]);
//     }
// let number=[1,2,3,4,5,6,7,8,9,10];
//     for(let i=0; i<number.length; i++){
//         if(number[i] %2 == 0){
//             console.log('number is even');
//         }
//         else 
//         {
//            console.log('number is odd');
//         }
        
        
//     }
// function add(a,b){
//     //console.log (a+b);
//     return a+b;
// }
// let result= add(12,10);
// console.log(result);
// class Employee {
//     setDetails(name,id){
//         this.name=name;
//         this.id=id;
//     }
//     getName(){
//         return this.name;
//     }
//     getId(){
//         return this.id;
//     }
// }
// let emp1= new Employee();
// emp1.setDetails('Imran',1002);
// console.log(emp1.getName());
// console.log(emp1.getId());
// class Car{
//     setName(name){
//         this.name=name;
//     }
//     startEngine(){
//         console.log('Engine started for '+ this.name);
//     }
//     stopEngine(){
//         console.log('Engine Stopped for '+ this.name);
//     }
// }
// class Toyota extends Car{
//     topSpeed(speed){
//         console.log('Top Speed for '+ this.name + ' is '+ speed);
//     }

//     }
//     let myCar = new Toyota();
//     myCar.setName('Camry');
//     myCar.startEngine();
//     myCar.stopEngine();
//     myCar.topSpeed(200);

class Calculator{
//  Calculator(a,b){
//     this.a=a;
//     this.b=b;
//  }

// class Animal
// {
//     constructor(name)
//     {
//         this.name=name;
//     }
//     eats()
//     {
//         console.log(this.name+' eats food');    
//     }
// }
// class Alligator extends Animal
// {
//     eats()
//     {
//         console.log(this.name+' Eat fishes');
//     }
// }
// let Murphy=new Alligator('Murphy');
// Murphy.eats();

class Animal {
    constructor(name) {
        this.name = name;
    }
    eats() {
        console.log(this.name + ' eats food');
    }
}

class Alligator extends Animal {
    eats() {
        console.log(this.name + ' eats fishes');
    }
}

let Murphy = new Alligator('Murphy');
Murphy.eats();