
(function(){
  var mapa = document.querySelector('#mapa');
      if(mapa) {
          
    var map = L.map('mapa').setView([20.673668, -103.350512], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([20.673668, -103.350512]).addTo(map)
    .bindPopup('GDLWEBCAMP 2018 <br> Boletos ya disponibles')
    .openPopup();
}
})();

$(function(){
    
    //Lettering
    $('.nombre-sitio').lettering();
    
    //Agregar clase a menu
    $('body.conferencia .navegacion-principal a:contains("Conferencia")').addClass('activo');
    $('body.calendario .navegacion-principal a:contains("Calendario")').addClass('activo');
    $('body.invitados .navegacion-principal a:contains("Invitados")').addClass('activo');
    
    
    //Menu fijo
    var windowHeight = $(window).height();
    var barraAltura = $('.barra').innerHeight();
    
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        
        if(scroll > windowHeight){
            $('.barra').addClass('fixed');
            $('body').css({'margin-top': barraAltura + 'px'});
        }else{
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top': '0px'});
        }
        
    });
    
    
    
    //Menu responsive
    
    $('.menu-movil').on('click',function(){
        $('.navegacion-principal').slideToggle();
    });
    
    
    
    
    
    //Programa de Conferencias
    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo');
    
    $('.menu-programa a').on('click',function(){
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        
        return false;
    })
    
    
    //Animaciones para los numeros
    
    var resumenLista = jQuery('.resumen-evento');
    if(resumenLista.length > 0){
        $('.resumen-evento').waypoint(function(){
            
            $('.resumen-evento li:nth-child(1) p').animateNumber({number: 6},1200);
            $('.resumen-evento li:nth-child(2) p').animateNumber({number: 15},1200);
            $('.resumen-evento li:nth-child(3) p').animateNumber({number: 3},1500);
            $('.resumen-evento li:nth-child(4) p').animateNumber({number: 9},1500);
            
        },{
            offset: '60%'
        });
    }


    
    
    //Cuenta regresiva
    
    $('.cuenta-regresiva').countdown('2019/5/30 09:00:00', function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });
    
    var invitado3 = document.getElementById('invitado');
    
    //ColorBox
    if(invitado3 = document.getElementById('invitado')){
      $('.invitado-info').colorbox({inline:true,width:"50%"});
      $('.boton_newsletter').colorbox({inline:true,width:"50%"});
    }
    
});
    
