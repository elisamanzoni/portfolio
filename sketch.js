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

  var izi = select('#container_izi');
  izi.mouseClicked(izi_open);

  var diciotti= select('#container_diciotti');
  diciotti.mouseClicked(diciotti_open);

}

function draw() {
  // put drawing code here
}

function olympic_open() {
  var description_olympic = select('#description_olympic');
  var olympic_nome = select('#olympic_nome');
  var olympic_arrow = select('#olympic_arrow');
  if (description_olympic.hasClass('display_none')) {
    description_olympic.removeClass('display_none');
    olympic_nome.addClass('color');
    olympic_arrow.addClass('rotate');
  } else {
    description_olympic.addClass('display_none');
    olympic_nome.removeClass('color');
    olympic_arrow.removeClass('rotate');
  }
}

function deposito_open() {
  var description_deposito = select('#description_deposito');
  var deposito_nome = select('#deposito_nome');
  var deposito_arrow = select('#deposito_arrow');
  if (description_deposito.hasClass('display_none')) {
    description_deposito.removeClass('display_none');
    deposito_nome.addClass('color');
    deposito_arrow.addClass('rotate');
  } else {
    description_deposito.addClass('display_none');
    deposito_nome.removeClass('color');
    deposito_arrow.removeClass('rotate');
  }
}

function zefir_open() {
  var description_zefir = select('#description_zefir');
  var zefir_nome = select('#zefir_nome');
  var zefir_arrow = select('#zefir_arrow');
  if (description_zefir.hasClass('display_none')) {
    description_zefir.removeClass('display_none');
    zefir_nome.addClass('color');
    zefir_arrow.addClass('rotate');
  } else {
    description_zefir.addClass('display_none');
    zefir_nome.removeClass('color');
    zefir_arrow.removeClass('rotate');
  }
}

function izi_open() {
  var description_izi = select('#description_izi');
  var izi_nome = select('#izi_nome');
  var izi_arrow = select('#izi_arrow');
  if (description_izi.hasClass('display_none')) {
    description_izi.removeClass('display_none');
    izi_nome.addClass('color');
    izi_arrow.addClass('rotate');
  } else {
    description_izi.addClass('display_none');
    izi_nome.removeClass('color');
    izi_arrow.removeClass('rotate');
  }
}

function diciotti_open() {
  var description_diciotti = select('#description_diciotti');
  var diciotti_nome = select('#diciotti_nome');
  var diciotti_arrow = select('#diciotti_arrow');
  if (description_diciotti.hasClass('display_none')) {
    description_diciotti.removeClass('display_none');
    diciotti_nome.addClass('color');
    diciotti_arrow.addClass('rotate');
  } else {
    description_diciotti.addClass('display_none');
    diciotti_nome.removeClass('color');
    diciotti_arrow.removeClass('rotate');
  }
}
