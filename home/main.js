$(document).ready(function(){
'use strict'
paper.install(window);
paper.setup(document.getElementById('mainCanvas'));
// let c; 
// for(let x=25; x<400; x+=50){
//    for(let y=25; y<400; y+=50){
//     c = Shape.Circle(x, y, 70);
//     c.fillColor = '#ace';
//    }  
// }
let tool = new Tool();
let c = Shape.Circle(200, 200, 80);
c.fillColor = 'black';
let text = new PointText(200 , 200);
text.justification = 'center';
text.fillColor = 'white';
text.fontSize = 20;
text.content = 'hello world';

// tool.onMouseDown = function(event){
//     let c =Shape.Circle(event.point.x, event.point.y, 20);
//     c.fillColor = '#ace';
// }
// paper.view.draw();

function func(ar){
    ar.push('abc');
}
const bc = [5,6,7];
func(bc);
console.log(bc);
} );










