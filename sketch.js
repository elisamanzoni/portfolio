function preload() {
  // put preload code here
}

function setup() {

  createCanvas(0,0);

  var contact = select('#contact');
  contact.mouseClicked(contact_open);

  var exit = select('#exit');
  exit.mouseClicked(contact_close);



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

  var arthur= select('#container_arthur');
  arthur.mouseClicked(arthur_open);

  var sparkle= select('#container_sparkle');
  sparkle.mouseClicked(sparkle_open);

  var assunta= select('#container_assunta');
  assunta.mouseClicked(assunta_open);

  var mengoni= select('#container_mengoni');
  mengoni.mouseClicked(mengoni_open);

  var whyracism= select('#container_whyracism');
  whyracism.mouseClicked(whyracism_open);

  var haaring= select('#container_haaring');
  haaring.mouseClicked(haaring_open);

}

function draw() {
  // put drawing code here
}

function contact_open() {
  var contact = select('#contact');
  var contact_container = select ('#contact_container');
  if (contact.hasClass("green_background")){
    contact.removeClass("green_background");
    contact_container.removeClass('contact_container');
    contact_container.addClass('contact_container_sparito');

  } else{
    contact.addClass("green_background");
    contact_container.removeClass('contact_container_sparito');
    contact_container.removeClass('display_none');
    contact_container.addClass('contact_container');
  }
}

function contact_close() {
  var contact = select('#contact');
  var contact_container = select ('#contact_container');
  if (contact.hasClass("green_background")){
    contact.removeClass("green_background");
    contact_container.removeClass('contact_container');
    contact_container.addClass('contact_container_sparito');
  } else{
    contact.addClass("green_background");
    contact_container.removeClass('contact_container_sparito');
    contact_container.removeClass('display_none');
    contact_container.addClass('contact_container');
  }
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

function arthur_open() {
  var description_arthur = select('#description_arthur');
  var arthur_nome = select('#arthur_nome');
  var arthur_arrow = select('#arthur_arrow');
  if (description_arthur.hasClass('display_none')) {
    description_arthur.removeClass('display_none');
    arthur_nome.addClass('color');
    arthur_arrow.addClass('rotate');
  } else {
    description_arthur.addClass('display_none');
    arthur_nome.removeClass('color');
    arthur_arrow.removeClass('rotate');
  }
}

function sparkle_open() {
  var description_sparkle = select('#description_sparkle');
  var sparkle_nome = select('#sparkle_nome');
  var sparkle_arrow = select('#sparkle_arrow');
  if (description_sparkle.hasClass('display_none')) {
    description_sparkle.removeClass('display_none');
    sparkle_nome.addClass('color');
    sparkle_arrow.addClass('rotate');
  } else {
    description_sparkle.addClass('display_none');
    sparkle_nome.removeClass('color');
    sparkle_arrow.removeClass('rotate');
  }
}

function assunta_open() {
  var description_assunta = select('#description_assunta');
  var assunta_nome = select('#assunta_nome');
  var assunta_arrow = select('#assunta_arrow');
  if (description_assunta.hasClass('display_none')) {
    description_assunta.removeClass('display_none');
    assunta_nome.addClass('color');
    assunta_arrow.addClass('rotate');
  } else {
    description_assunta.addClass('display_none');
    assunta_nome.removeClass('color');
    assunta_arrow.removeClass('rotate');
  }
}

function mengoni_open() {
  var description_mengoni = select('#description_mengoni');
  var mengoni_nome = select('#mengoni_nome');
  var mengoni_arrow = select('#mengoni_arrow');
  if (description_mengoni.hasClass('display_none')) {
    description_mengoni.removeClass('display_none');
    mengoni_nome.addClass('color');
    mengoni_arrow.addClass('rotate');
  } else {
    description_mengoni.addClass('display_none');
    mengoni_nome.removeClass('color');
    mengoni_arrow.removeClass('rotate');
  }
}

function whyracism_open() {
  var description_whyracism = select('#description_whyracism');
  var whyracism_nome = select('#whyracism_nome');
  var whyracism_arrow = select('#whyracism_arrow');
  if (description_whyracism.hasClass('display_none')) {
    description_whyracism.removeClass('display_none');
    whyracism_nome.addClass('color');
    whyracism_arrow.addClass('rotate');
  } else {
    description_whyracism.addClass('display_none');
    whyracism_nome.removeClass('color');
    whyracism_arrow.removeClass('rotate');
  }
}

function haaring_open() {
  var description_haaring = select('#description_haaring');
  var haaring_nome = select('#haaring_nome');
  var haaring_arrow = select('#haaring_arrow');
  if (description_haaring.hasClass('display_none')) {
    description_haaring.removeClass('display_none');
    haaring_nome.addClass('color');
    haaring_arrow.addClass('rotate');
  } else {
    description_haaring.addClass('display_none');
    haaring_nome.removeClass('color');
    haaring_arrow.removeClass('rotate');
  }
}
