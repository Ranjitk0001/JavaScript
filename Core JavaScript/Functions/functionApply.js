  
var arr = [7, 5, 9, 1];  
var max = Math.max.apply(null, arr);  
// document.writeln(max); 
// console.log('Max No:-',max) 
// Max No:- 9

var min = Math.min.apply(null, arr);  
// console.log('Min No:-',min) 
// Min No:- 1


var array = [1,2,3,4];  
var newarray=[5,6,7,8,1];  
array.push.apply(array, newarray);  
// document.writeln(array); 
console.log('Arrays:-',array) 
/*
console.log('Arrays:-',array) Arrays:- [
    1, 2, 3, 4, 5,
    6, 7, 8, 1 ]
*/



// var array = [1,2,3,4];  
// var newarray=["One","Two","Three","Four"]  
// array.push.apply(array, newarray);  
// console.log('Arrays:-',array) 
/*
Arrays:- [ 1, 2, 3, 4, 'One', 'Two', 'Three', 'Four' ]
*/