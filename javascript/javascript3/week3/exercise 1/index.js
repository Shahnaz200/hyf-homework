const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
const height = context.canvas.height
const width = context.canvas.width
const radius = 10;

context.beginPath();
context.arc(width , height, radius, 0, 2 * Math.PI, false);
context.fillStyle = 'red';
context.fill();



class Circle{
 constructor(x, y, r, startAngle, endAngle, fillColor){
  this.x = x
  this.y = y
  this.r = r
  this.startAngle = startAngle
  this.endAngle = endAngle
  this.fillColor = fillColor
 }

 draw(){ 
  context.width = canvas.width;
  context.height = canvas.height;
  context.beginPath();
  context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
  context.fillStyle = this.fillColor;
  context.fill();
 }
}


const c1 = new Circle(40, 100, 30, 0, 2 * Math.PI, "#13bd23");
c1.draw();

const c2 = new Circle(80, 70, 20, 0, 2 * Math.PI, "#134fdf");
c2.draw();

const c3 = new Circle(160, 40, 10, 0, 2 * Math.PI, "#fc0002");
c3.draw();


const randomize = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const color = `rgb(${r},${g},${b}`;
    const randomObject = {
        x : Math.floor(Math.random() * window.innerWidth),
        y : Math.floor(Math.random() * window.innerHeight),
        r : Math.floor(Math.random() * 48 + 2),
        color,
    }
  
    return randomObject;
};


//Every 100ms creates a new random colored and random sized circle :}
const circleInterval = setInterval(() => {
    const randomCircle = randomize();
    const circle = new Circle(randomCircle.x, randomCircle.y, randomCircle.r, 0, 2 * Math.PI, randomCircle.color);
    circle.draw();
}, 100);

//working but not using becuase its more buetiful without this code

// setInterval(() => {
//  clearInterval(circleInterval);
// },1000) 
