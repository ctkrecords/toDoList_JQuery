    var $i = 0;
    $("#agregar").click(function () { 
        var $tarea = $("#tarea").val();
        if($tarea!=""){
            $i++;
            console.log("contador: "+$i);
            $("#nuevasTareas")
            .append(
                "<div class='checks' id='"+$i+"'>"
                    +"<p>"+$tarea+"</p>"
                    +"<button type='button' name='cerrar' class='cerrar' id='cerrar'>finalizar</button>"
                +"</div>"
                );
                $("#tarea").val("");
                $("#campoVacio").html("");
        }else{
            $("#campoVacio").html("Aviso: por favor escribe una tarea o recordatorio.");
        }
        $("button#cerrar").on('click', function() {
            $(this).parent().remove();
        });
    });
    