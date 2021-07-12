$( document ).ready(function(){



    //ocultar contenido tarjetas
    $(".card-title").on("click", function(){
        $(".card-text").toggle();
    });

    // color rojo texto al hacer doble click
    $("h6").on("dblclick", function(){
        $(this).css("color", "red");
    });

    // tooltip
    $(function(){
        $('[datta-toogle="tooltip"]').tooltip()
    })

    $("#enviarCorreo").on("click", function (event) {
        alert("El correo fue enviado correctamente...")
    });

});
