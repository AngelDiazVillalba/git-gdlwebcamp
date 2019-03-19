$(document).ready(function(){
$('#login-admin').on('submit',function(e){
    e.preventDefault();

    var datos = $(this).serializeArray();

    $.ajax({
        type: $(this).attr('method'),
        data: datos,
        url: $(this).attr('action'),
        dataType: 'json',
        success: function(data){
            var resultado = data;
            console.log(data);
            if(resultado.respuesta == 'exitoso'){
                /*swal(
                    'Login Correcto',
                    'Bienvenid@ '+resultado.usuario+' !! ',
                    'success'
                )*/
                Swal.fire({
                    position: 'center',
                    type: 'success',
                    title: 'Bienvenid@ '+resultado.usuario+' !! ',
                    showConfirmButton: false,
                    timer: 2000
                  })
                setTimeout(function(){
                    window.location.href = 'dashboard.php';
                }, 2000)
            }else{
                swal(
                    'Error!',
                    'Usuario o Password Incorrectos',
                    'error'
                )
            }
            
        }
    })
});
})