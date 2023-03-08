var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
var d = new Date();
dia = semana[d.getDay()];
var treinos = [];
switch (dia) {
    case 'Quarta-Feira':
        treinos[0] = "flexão";
        treinos[1] = "abdominal";
      break;
    case 'quinta':
        treinos[0] = "abdominal";
    break;
}

function listar(){
    for(var i = 0; i < treinos.length; i++){
        $("#lista").append('<li class="list-group-item" aria-current="true">'+treinos[i]+' <span class="badge bg-danger rounded-pill">12x</span></li> ');
    }
    $("#dia").append('<h5>'+dia+'</h5>');
}
$(document).on('click','.list-group-item',function() {
    $(".list-group-item").removeClass("active"); 
    $(this).addClass("active"); 
  });
