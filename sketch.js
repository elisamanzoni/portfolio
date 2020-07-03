function preload() {
  // put preload code here
}

function setup() {

  var olympic = select('#container_olympic');
  olympic.mouseClicked(olympic_open);

  var deposito = select('#container_deposito');
  deposito.mouseClicked(deposito_open);

  var zefir = select('#container_zefir');
  zefir.mouseClicked(zefir_open);

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

function deposito_open() {
  var description_deposito = select('#description_deposito');
  if (description_deposito.hasClass('display_none')) {
    description_deposito.removeClass('display_none');
  } else {
    description_deposito.addClass('display_none')
  }
}

function zefir_open() {
  var description_zefir = select('#description_zefir');
  if (description_zefir.hasClass('display_none')) {
    description_zefir.removeClass('display_none');
  } else {
    description_zefir.addClass('display_none')
  }
}
