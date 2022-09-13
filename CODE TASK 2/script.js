// alert("hello");
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
  let rand1 = Math.random() * (255 - 0) + 0;
let rand2 = Math.random() * (255 - 0) + 0;
let rand3 = Math.random() * (255 - 0) + 0;
  //document.body.style.background =rgb(rand1,rand2,rand3);
  // var test=document.getElementById('change1');
  // console.log( window.getComputedStyle(test));
  
  
  
  document.body.style.background = 'rgb(' + rand1 + ',' + rand2 + ',' + rand3 + ')';
}

document.getElementById('change').addEventListener("click", fun);

document.getElementById('change1').addEventListener("click", func1);


