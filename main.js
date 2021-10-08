canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;

car2_width = 120;
car2_height = 70;
car2_image="car 1.jpg";
car2_x=10;
car2_y=10;

car1_width = 120;
car1_height = 70;
car1_image="car 2.jpg";
car1_x=10;
car1_y=10;


function add(){
  background_imgTag = new Image();
      background_imgTag.onload=uploadbackground;
    

    car2_imgTag = new Image();
      car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_image;
   
    car1_imgTag = new Image();
      car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_image;
}

function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0, canvas.width,canvas.height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y, car2_width,car2_height);
}
function uploadcar1(){
  ctx.drawImage(car1_imgTag,car1_x,car1_y, car1_width,car1_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
keypressed=e.keyCode;
console.log(keypressed);
if(keypressed=='38')
function car1_up()
{
      if(car1_y >=0)
      {
        car1_y = car1_y - 10;
        console.log("when up arrow is pressed, x = " + car1_x + "| y" + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
      }
}
function car1_down()
{
      if(car1_y >=500)
      {
        car1_y = car1_y - 10;
        console.log("when down arrow is pressed, x = " + car1_x + "| y" + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
      }
}
function car1_left()
{
      if(car1_x >=0)
      {
        car1_x = car1_x - 10;
        console.log("when left arrow is pressed, x = " + car1_x + "| y" + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
      }
}
function car1_down()
{
      if(car1_y >=0)
      {
        car1_y = car1_y - 10;
        console.log("when left arrow is pressed, x = " + car1_x + "| y" + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
      }
}
{
  car2_up();
  console.log("up arrow key");
}
if(keypressed=='40')
{
  car2_down();
  console.log("down arrow key");
}
if(keypressed=='37')
{
  car2_left();
  console.log("left arrow key");
}
if(keypressed=='39')
{
  car2_right();
  console.log("right arrow key");
}
if(keypressed=='87')
{
  car1_up();
  console.log("key w");
}
if(keypressed=='65')
{
  car1_down();
  console.log("key a");
}
if(keypressed=='68')
{
  car1_right();
  console.log("key d");
}
if(keypressed=='88')
{
  car1_left();
  console.log("key x");
}
}
