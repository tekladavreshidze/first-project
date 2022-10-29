//1) შევქმნათ ფუნქცია რომელსაც პარამეტრის სახით გადავცემთ მასივს და სიტყვას
//ფუნქციამ უნდა მოძებნოს ეს სიტყვა მასივში და უნდა დაბეწდოს მასივი შეიცავს თუ არა ამ სიტყვას

// let myArray = ["Tekla","Tamari","Nika","Ana","Lela","Tekla"];
// let firstName = "Tekla";
// let counter = 0;

// console.log(myArray);

// function check(array,name){
    
//     for( i = 0; i < array.length; i++){

//         if(array[i] == name){
//            counter++;
//         }
//     }
// if(counter > 1 ){
// console.log(`${name} არის მასივში ${counter}-ჯერ`);
// }
// }
// check(myArray,firstName);


//2) შევქმნათ ფუნქცია რომელსაც პარამეტრის სახით გადავცემთ 2 ცალ მასივს
//ფუნქციამ პირველი მასივის რიცხვები უნდა გადაწეროს მეორე მასივში,ხოლო მეორე მასივის რიცხვები პირველში

// let myArray1 = [2,4,6,8,10];
// let myArray2 = [1,3,5,7,9];
// let number;

// console.log(`პირველი მასივი: ${myArray1}`);
// console.log(`მეორე მასივი:    ${myArray2}`);
// console.log("--------------------------")

// function switchArray(array1,array2){
//     for(let i = 0; i < array1.length && array2.length; i ++){
//         number = array1[i];
//         array1[i] = array2[i];
//         array2[i] = number;

//     }
//     console.log(`პირველი მასივი: ${array1}`);
//     console.log(`მეორე მასივი:    ${array2}`);
// }

// switchArray(myArray1,myArray2);

//3) შექმენით ფუნქცია რომელსაც პარამეტრის სახით გადასცემთ რიცხვების მასივს [18,1,5,9,35,47,20,8] 
//ფუნქციამ უნდა დაალაგოს რიცხვები მასივში ზრდადობის მიხედვით [1,5,8,9,18,20,35,47]

// let myArray = [18,1,5,9,35,47,20,8];
// let num;
// console.log(myArray);

// function sorting(array){

// for(let j = 0; j < array.length; j ++){

//   for(let i = 0; i < array.length; i++){

//       if(array[i] > array[i+1]){
//           num = array[i+1];
//           array[i+1] = array[i];
//           array[i] = num;
//         }
//      }
// }
// console.log(array);
// }
// sorting(myArray);


//4) შექმენით ფუნქცია რომელსაც პარამატრის სახით გადასცემთ 
//სახელს,გვარს და ასაკს ფუნქციამ უნდა დაბეწდოს ეს გადაცემული პარამეტრები html-ში.

// let firstName = "Tekla"; 

// let lastName = "Davreshidze";

// let Age = 16 ; 

// function html(fname,lname,age){
//     let htmlRenderer = `<div class = "container">
//     <p class = "p1"> ${fname} </p>
//     <p class = "p2"> ${lname} </p>
//     <p class = "p3"> ${age} </p>
//     </div>`
//     document.write(htmlRenderer);
// }
// html(firstName,lastName,Age);



















































