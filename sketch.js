//menu
var menu;
var false_menu;
var linea_menu1;
var linea_menu2;



function preload(){
  // put preload code here
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.class('canvas');
  angleMode(DEGREES);

//------------MENU----------------------
menu = select('#menu');
menu.mouseClicked(menu_open);

false_menu = select('#false_menu');
linea_menu1 = select('#linea_menu1');
linea_menu2 = select('#linea_menu2');


//------------HOME----------------------


}

function draw() {
clear();
  for(var x = 0; x < windowWidth+25; x += 25) {
    for(var y = 0; y < windowHeight+25; y += 25) {

if(windowWidth >1024){
  var unitX = mouseX;
  var unitY = mouseY;
  var distance = dist(x,y,unitX,unitY); // only this would be too much!
  var remap = map(distance, 0, 600, 0, 12); // remap it, and set as starting max value 565, higher values are ignored
}

else{
  var unitX = windowWidth/2 + (rotationY)*8;
  var unitY = windowWidth/2 + (rotationX-70)*8;
  var distance = dist(x,y,unitX,unitY); // only this would be too much!
  var remap = map(distance, 0, 700, 0, 15); // remap it, and set as starting max value 565, higher values are ignored
}


      noStroke();
      fill('#8cc63f');
      ellipse(x, y, remap);
    }
  }
  // clear();
  // fill('rgba(247, 147, 30, 0.6)');
  // ellipseMode(CENTER);
  // ellipse(mouseX, mouseY, 35, 35);
}

function menu_open(){

  var menu_container = select('#menu_container');
  var menu = select('#menu');

  if (linea_menu1.hasClass('linea_dritta1')) {

    menu.removeClass('white');

    linea_menu1.removeClass('linea_dritta1');
    linea_menu2.removeClass('linea_dritta2');

    linea_menu1.addClass('linea_ruotata1');
    linea_menu2.addClass('linea_ruotata2');

    false_menu.removeClass('menu');
    false_menu.removeClass('hide');
    false_menu.removeClass('menu_closing');
    false_menu.addClass('menu_opening');

    menu_container.removeClass('hide');
    menu_container.addClass('menu_container');

  }

  else if(linea_menu1.hasClass('linea_ruotata1')){

    menu.addClass('white');

    linea_menu1.removeClass('linea_ruotata1');
    linea_menu2.removeClass('linea_ruotata2');

    linea_menu1.addClass('linea_dritta1');
    linea_menu2.addClass('linea_dritta2');

    false_menu.removeClass('menu_opening');
    false_menu.addClass('menu_closing');
    false_menu.addClass('hide');

    menu_container.removeClass('menu_container');
    menu_container.addClass('hide');


  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
