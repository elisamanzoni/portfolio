function preload() {
  // put preload code here
}

function setup() {

  var olympic = select('#container_olympic');
  olympic.mouseClicked(olympic_open);
  // put setup code here
}

function draw() {
  // put drawing code here
}

function olympic_open() {
  var description_olympic = select('#description_olympic');
  if (description_olympic.hasClass('display_none')) {
    description_olympic.removeClass('display_none');
  } else {
    description_olympic.addClass('display_none')
  }
}
