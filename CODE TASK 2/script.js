import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

function fun(){
document.body.style.background = faker.color.rgb() ;
}

/*
var rgbColor = 'rgb(46, 123, 14)';
rgbArr = rgbColor.substring(4, rgbColor.length-1).replace(/ /g, '').split(',');
console.log(rgbArr);
*/


function func1(){
  let rand1 = Math.floor(Math.random() * (255 - 0) + 0);
let rand2 = Math.floor(Math.random() * (255 - 0) + 0);
let rand3 = Math.floor(Math.random() * (255 - 0) + 0);
  //document.body.style.background =rgb(rand1,rand2,rand3);
   var test=document.getElementById('change1');
  // console.log( window.getComputedStyle(test));
  
  var test1='rgb(' + rand1 + ',' + rand2 + ',' + rand3 + ')';
  
  var test3=document.body.style.backgroundColor;
  
  // var test4='rgb(' + rand1 + ',' + rand2 + ',' + rand3 + ')';
  
  if(test3===test1) func1();
  
  
  
  document.body.style.background = 'rgb(' + rand1 + ',' + rand2 + ',' + rand3 + ')';
}

document.getElementById('change').addEventListener("click", fun);

document.getElementById('change1').addEventListener("click", func1);

/*
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
function fun(){
document.body.style.background = faker.color.rgb() ;
}
var rgbColor = 'rgb(46, 123, 14)';
rgbArr = rgbColor.substring(4, rgbColor.length-1).replace(/ /g, '').split(',');
console.log(rgbArr);
function func1(){
//   let rand1 = Math.random() * (255 - 0) + 0;
// let rand2 = Math.random() * (255 - 0) + 0;
// let rand3 = Math.random() * (255 - 0) + 0;
  
  let rand1=255;
  let rand2=255;
  let rand3=255;
  //document.body.style.background =rgb(rand1,rand2,rand3);
  
  // gets back color alert(document.body.style.backgroundColor);
  var test1=document.body.style.backgroundColor;
  alert(test1);
  var test2='rgb(' + rand1 + ',' + rand2 + ',' + rand3 + ')'
  alert(test1==test2) 
  
  // var test=document.getElementById('change1');
  // console.log( window.getComputedStyle(test));
  
  
  
  document.body.style.background = 'rgb(' + rand1 + ',' + rand2 + ',' + rand3 + ')';
}
document.getElementById('change').addEventListener("click", fun);
document.getElementById('change1').addEventListener("click", func1);
*/
