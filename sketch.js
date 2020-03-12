var digitaleButton;
var coorporateButton;
var selectTuttiButton;
var editorialiButton;
var illustrazioniButton;
var installazioniButton;

var quadratino1;
var quadratino2;

var digitaleClass;
var coorporateClass;
var editorialeClass;
var illustrazioneClass;
var installazioneClass;

var imgButton;
var lineButton;


function preload(){
  // put preload code here
}

function setup() {
  // var cnv = createCanvas(windowWidth, windowHeight);
  // cnv.class('canvas');

//classe dei lavori
  digitaleClass = selectAll('.digitale');
  coorporateClass = selectAll('.coorporate');
  editorialeClass = selectAll('.editoriale');
  illustrazioneClass = selectAll('.illustrazione');
  installazioneClass = selectAll('.installazione');

//quadratini selezione
  quadratino1 = select('#quadratino1');
  quadratino2 = select('#quadratino2');

  selectTuttiButton = select('#tutti');
  selectTuttiButton.mouseClicked(selectTutti);

  coorporateButton = select('#coorporate');
  coorporateButton.mouseClicked(selectCoorporate);

  digitaleButton = select('#digitali');
  digitaleButton.mouseClicked(selectDigitale);

  editorialiButton = select('#editoriali');
  editorialiButton.mouseClicked(selectEditoriali);

  illustrazioniButton = select('#illustrazioni');
  illustrazioniButton.mouseClicked(selectIllustrazioni);

  installazioniButton = select('#installazioni');
  installazioniButton.mouseClicked(selectInstallazioni);


  imgButton = select('#immagini');
  imgButton.mouseClicked(imgView);

  lineButton = select('#lista');
  lineButton.mouseClicked(imgView);




}

function draw() {
  // clear();
  // fill('rgba(247, 147, 30, 0.6)');
  // ellipseMode(CENTER);
  // ellipse(mouseX, mouseY, 35, 35);
}

function selectDigitale(){

  quadratino2.addClass('q_digitale');
  quadratino2.removeClass('q_tutti');
  quadratino2.removeClass('q_coorporate');
  quadratino2.removeClass('q_editoriale');
  quadratino2.removeClass('q_illustrazione');
  quadratino2.removeClass('q_installazione');

  digitaleButton.removeClass('not_selected');
  coorporateButton.addClass('not_selected');
  selectTuttiButton.addClass('not_selected');
  editorialiButton.addClass('not_selected');
  illustrazioniButton.addClass('not_selected');
  installazioniButton.addClass('not_selected');


  for (let i = 0; i < digitaleClass.length; i++) {
      digitaleClass[i].addClass('display');
      digitaleClass[i].removeClass('hide');
    }

  for (let i = 0; i < coorporateClass.length; i++) {
    coorporateClass[i].addClass('hide');
    coorporateClass[i].removeClass('display');
    }

    for (let i = 0; i < editorialeClass.length; i++) {
      editorialeClass[i].addClass('hide');
      editorialeClass[i].removeClass('display');
      }

      for (let i = 0; i < illustrazioneClass.length; i++) {
        illustrazioneClass[i].addClass('hide');
        illustrazioneClass[i].removeClass('display');
        }

        for (let i = 0; i < installazioneClass.length; i++) {
          installazioneClass[i].addClass('hide');
          installazioneClass[i].removeClass('display');
          }

}

function selectCoorporate(){

    quadratino2.addClass('q_coorporate');
    quadratino2.removeClass('q_tutti');
    quadratino2.removeClass('q_digitale');
    quadratino2.removeClass('q_editoriale');
    quadratino2.removeClass('q_illustrazione');
    quadratino2.removeClass('q_installazione');

    coorporateButton.removeClass('not_selected');
    digitaleButton.addClass('not_selected');
    selectTuttiButton.addClass('not_selected');
    editorialiButton.addClass('not_selected');
    illustrazioniButton.addClass('not_selected');
    installazioniButton.addClass('not_selected');


  for (let i = 0; i < coorporateClass.length; i++) {
      coorporateClass[i].addClass('display');
      coorporateClass[i].removeClass('hide');
    }

  for (let i = 0; i < digitaleClass.length; i++) {
    digitaleClass[i].addClass('hide');
    digitaleClass[i].removeClass('display');
    }

    for (let i = 0; i < editorialeClass.length; i++) {
      editorialeClass[i].addClass('hide');
      editorialeClass[i].removeClass('display');
      }

      for (let i = 0; i < illustrazioneClass.length; i++) {
        illustrazioneClass[i].addClass('hide');
        illustrazioneClass[i].removeClass('display');
        }

        for (let i = 0; i < installazioneClass.length; i++) {
          installazioneClass[i].addClass('hide');
          installazioneClass[i].removeClass('display');
          }

}

function selectTutti(){

  quadratino2.addClass('q_tutti');
  quadratino2.removeClass('q_coorporate');
  quadratino2.removeClass('q_digitale');
  quadratino2.removeClass('q_editoriale');
  quadratino2.removeClass('q_illustrazione');
  quadratino2.removeClass('q_installazione');

  selectTuttiButton.removeClass('not_selected');
  digitaleButton.addClass('not_selected');
  coorporateButton.addClass('not_selected');
  editorialiButton.addClass('not_selected');
  illustrazioniButton.addClass('not_selected');
  installazioniButton.addClass('not_selected');

  for (let i = 0; i < coorporateClass.length; i++) {
      coorporateClass[i].addClass('display');
      coorporateClass[i].removeClass('hide');
    }

  for (let i = 0; i < digitaleClass.length; i++) {
    digitaleClass[i].addClass('display');
    digitaleClass[i].removeClass('hide');
    }

    for (let i = 0; i < editorialeClass.length; i++) {
      editorialeClass[i].addClass('display');
      editorialeClass[i].removeClass('hide');
      }

      for (let i = 0; i < illustrazioneClass.length; i++) {
        illustrazioneClass[i].addClass('display');
        illustrazioneClass[i].removeClass('hide');
        }

        for (let i = 0; i < installazioneClass.length; i++) {
          installazioneClass[i].addClass('display');
          installazioneClass[i].removeClass('hide');
          }

}

function selectEditoriali(){

  quadratino2.addClass('q_editoriale');
  quadratino2.removeClass('q_tutti');
  quadratino2.removeClass('q_coorporate');
  quadratino2.removeClass('q_digitale');
  quadratino2.removeClass('q_illustrazione');
  quadratino2.removeClass('q_installazione');

  editorialiButton.removeClass('not_selected');
  coorporateButton.addClass('not_selected');
  selectTuttiButton.addClass('not_selected');
  digitaleButton.addClass('not_selected');
  illustrazioniButton.addClass('not_selected');
  installazioniButton.addClass('not_selected');


  for (let i = 0; i < editorialeClass.length; i++) {
      editorialeClass[i].addClass('display');
      editorialeClass[i].removeClass('hide');
    }

  for (let i = 0; i < coorporateClass.length; i++) {
    coorporateClass[i].addClass('hide');
    coorporateClass[i].removeClass('display');
    }

    for (let i = 0; i < digitaleClass.length; i++) {
      digitaleClass[i].addClass('hide');
      digitaleClass[i].removeClass('display');
      }

      for (let i = 0; i < illustrazioneClass.length; i++) {
        illustrazioneClass[i].addClass('hide');
        illustrazioneClass[i].removeClass('display');
        }

        for (let i = 0; i < installazioneClass.length; i++) {
          installazioneClass[i].addClass('hide');
          installazioneClass[i].removeClass('display');
          }

}

function selectIllustrazioni(){

  quadratino2.addClass('q_illustrazione');
  quadratino2.removeClass('q_tutti');
  quadratino2.removeClass('q_coorporate');
  quadratino2.removeClass('q_digitale');
  quadratino2.removeClass('q_editoriale');
  quadratino2.removeClass('q_installazione');

  illustrazioniButton.removeClass('not_selected');
  coorporateButton.addClass('not_selected');
  selectTuttiButton.addClass('not_selected');
  digitaleButton.addClass('not_selected');
  editorialiButton.addClass('not_selected');
  installazioniButton.addClass('not_selected');


  for (let i = 0; i < illustrazioneClass.length; i++) {
      illustrazioneClass[i].addClass('display');
      illustrazioneClass[i].removeClass('hide');
    }

  for (let i = 0; i < coorporateClass.length; i++) {
    coorporateClass[i].addClass('hide');
    coorporateClass[i].removeClass('display');
    }

    for (let i = 0; i < digitaleClass.length; i++) {
      digitaleClass[i].addClass('hide');
      digitaleClass[i].removeClass('display');
      }

      for (let i = 0; i < editorialeClass.length; i++) {
        editorialeClass[i].addClass('hide');
        editorialeClass[i].removeClass('display');
        }

        for (let i = 0; i < installazioneClass.length; i++) {
          installazioneClass[i].addClass('hide');
          installazioneClass[i].removeClass('display');
          }

}

function selectInstallazioni(){

  quadratino2.addClass('q_installazione');
  quadratino2.removeClass('q_tutti');
  quadratino2.removeClass('q_coorporate');
  quadratino2.removeClass('q_digitale');
  quadratino2.removeClass('q_editoriale');
  quadratino2.removeClass('q_illustrazione');

  installazioniButton.removeClass('not_selected');
  coorporateButton.addClass('not_selected');
  selectTuttiButton.addClass('not_selected');
  digitaleButton.addClass('not_selected');
  editorialiButton.addClass('not_selected');
  illustrazioniButton.addClass('not_selected');


  for (let i = 0; i < installazioneClass.length; i++) {
      installazioneClass[i].addClass('display');
      installazioneClass[i].removeClass('hide');
    }

  for (let i = 0; i < coorporateClass.length; i++) {
    coorporateClass[i].addClass('hide');
    coorporateClass[i].removeClass('display');
    }

    for (let i = 0; i < digitaleClass.length; i++) {
      digitaleClass[i].addClass('hide');
      digitaleClass[i].removeClass('display');
      }

      for (let i = 0; i < editorialeClass.length; i++) {
        editorialeClass[i].addClass('hide');
        editorialeClass[i].removeClass('display');
        }

        for (let i = 0; i < illustrazioneClass.length; i++) {
          illustrazioneClass[i].addClass('hide');
          illustrazioneClass[i].removeClass('display');
          }

}


function imgView(){

  quadratino1.addClass('q_immagini');
  quadratino1.removeClass('q_lista');

  imgButton.removeClass('not_selected');
  lineButton.addClass('not_selected');

  nome_e_descrizione_line_class = selectAll('.nome_e_descrizione_line');
  image_line_class = selectAll('.image_line');

  portfolio_container1 = select('#portfolio_container1');
  portfolio_container1.addClass('hide');

  for (let i = 0; i < nome_e_descrizione_line_class.length; i++) {
    nome_e_descrizione_line_class[i].addClass('nome_e_descrizione_img');
    nome_e_descrizione_line_class[i].removeClass('nome_e_descrizione_line');
    }

    for (let i = 0; i < image_line_class.length; i++) {
      image_line_class[i].addClass('image_img');
      image_line_class[i].removeClass('image_line');
      }
}
