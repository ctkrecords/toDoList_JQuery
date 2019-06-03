var i = 0;

/*function agregarTarea(tarea){
	var add = "<div id='checks'><div id='"+i+"'>"+tarea+"<input type='checkbox' name='check1' onchange='borrar("+i+")'></div></div>";
	document.body.innerHTML += add;
	i++;
}*/

function agregarTarea(tarea){
	var add = "<div  class='checks' id='"+i+"' ondblclick='borrar("+i+")'>"+tarea+"</div></div>";
	document.body.innerHTML += add;
	i++;
}

function borrar(n){
	document.getElementById(n).setAttribute("style","display:none");
}

function completarCampo(){
	var tarea = document.getElementsByName("tarea")[0].value;
	if (tarea!=""){
		document.getElementById("campoVacio").innerHTML = "";
		agregarTarea(tarea);
	}else{
		document.getElementById("campoVacio").innerHTML = "Aviso: por favor escribe una tarea o recordatorio.";
	}
}

