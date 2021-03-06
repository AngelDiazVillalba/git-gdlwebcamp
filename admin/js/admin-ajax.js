$(document).ready(function(){
  $('#guardar-registro').on('submit',function(e){
        e.preventDefault();

        var datos = $(this).serializeArray();

        $.ajax({
            type: $(this).attr('method'),
            data: datos,
            url: $(this).attr('action'),
            dataType: 'json',
            success: function(data){
                console.log(data);

                var resultado = data;
                if(resultado.respuesta == 'exito'){
                    Swal.fire({
                        position: 'center',
                        type: 'success',
                        title: 'Se guardo correctamente',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    setTimeout(function(){
                        window.location.href = 'lista-admin.php';
                    }, 1500)
                }else if(resultado.respuesta == 'exito1'){
                    Swal.fire({
                        position: 'center',
                        type: 'success',
                        title: 'Se guardo correctamente',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    setTimeout(function(){
                        window.location.href = 'lista-evento.php';
                    }, 1500)
                }else if(resultado.respuesta == 'exito2'){
                    Swal.fire({
                        position: 'center',
                        type: 'success',
                        title: 'Se guardo correctamente',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    setTimeout(function(){
                        window.location.href = 'lista-categorias.php';
                    }, 1500)
                }else if(resultado.respuesta == 'exito3'){
                    Swal.fire({
                        position: 'center',
                        type: 'success',
                        title: 'Se guardo correctamente',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    setTimeout(function(){
                        window.location.href = 'lista-registrados.php';
                    }, 1500)
                }else{
                    swal(
                        'Error!',
                        'Hubo un error!',
                        'error'
                    )
                }
            }
        })
    });

    //Se ejecuta cuando hay un archivo

    $('#guardar-registro-archivo').on('submit',function(e){
        e.preventDefault();

        var datos = new FormData(this);

        $.ajax({
            type: $(this).attr('method'),
            data: datos,
            url: $(this).attr('action'),
            dataType: 'json',
            contentType: false,
            processData: false,
            async: true,
            cache: false,
            success: function(data){
                console.log(data);

                var resultado = data;
                if(resultado.respuesta == 'exito'){
                    Swal.fire({
                        position: 'center',
                        type: 'success',
                        title: 'Se guardo correctamente',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    setTimeout(function(){
                        window.location.href = 'lista-admin.php';
                    }, 1500)
                }else if(resultado.respuesta == 'exito1'){
                    Swal.fire({
                        position: 'center',
                        type: 'success',
                        title: 'Se guardo correctamente',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    setTimeout(function(){
                        window.location.href = 'lista-evento.php';
                    }, 1500)
                }else if(resultado.respuesta == 'exito2'){
                    Swal.fire({
                        position: 'center',
                        type: 'success',
                        title: 'Se guardo correctamente',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    setTimeout(function(){
                        window.location.href = 'lista-categorias.php';
                    }, 1500)
                }else if(resultado.respuesta == 'exito3'){
                    Swal.fire({
                        position: 'center',
                        type: 'success',
                        title: 'Se guardo correctamente',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    setTimeout(function(){
                        window.location.href = 'lista-invitados.php';
                    }, 1500)
                }else{
                    swal(
                        'Error!',
                        'Hubo un error!',
                        'error'
                    )
                }
            }
        })
    });

    //Eliminar un registro
    $('.borrar_registro').on('click',function(e){
        e.preventDefault();

        var id = $(this).attr('data-id');
        var tipo = $(this).attr('data-tipo');

        Swal.fire({
            title: '¿Estas seguro?',
            text: "Un registro eliminado no se puede recuperar!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
            $.ajax({
                    type:'post',
                    data:{
                        'id': id,
                        'registro' : 'eliminar'
                    },
                    url: 'modelo-'+tipo+'.php',
                    success:function(data){
                        var resultado = JSON.parse(data);
                        if(resultado.respuesta == 'exito'){
                            Swal.fire(
                                'Eliminado!',
                                'Registro Eliminado.',
                                'success'
                            )
                            jQuery('[data-id="'+resultado.id_eliminado+'"]').parents('tr').remove();
                        }else{
                            Swal.fire({
                                type: 'error',
                                title: 'Error!!',
                                text: 'No se pudo eliminar!',
                            })
                        }
                    
                    }
                })
            }
        });
    });
});