/*
step 1:- Declare a array-arr
Step 2:-  we use the set and filtered the array and store in unique var
Step 3:- then compare both arrays using arr.length ===unique.length, if condition satiesfied the return true
Step 4:- other wise return false
*/

//Way 1:-
// let arr =[1,2,3,3,4,4];
// const unique = Array.from(new Set(arr));
// console.log(unique);
// if(arr.length!== unique.length){
//     console.log("true");
// }
// else{
//     console.log("false");
// }
/*
Step1:- create a function 
Step 2:- find the duplicats  using function, if duplicate occurs 2 times or more than 2 times in array so, it will print true otherwise false

*/
// let arr=[1,2,3,4,4,6,5];
// function checkUniqueArray(arr){
//     let newArr=[];
//     for (let i=0;i<=arr.length-1;i++){
//         console.log("Shivam",arr[i]);
//         for(let j=i+1;j<=arr.length-1;j++){
//         console.log("Amit",arr[j]);
            
//         }
//     }
// }
// checkUniqueArray(arr);

const arr2= [1,1,2,3,3,4,4,5];
const toFindduplicate= arr2=>arr2.filter((item,index)=>arr2.indexOf(item)!==index);
const duplicateElem =toFindduplicate(arr2);
console.log(duplicateElem);




