function validarCamposObligatorios()

{
	var bandera=true;
	for (var i =0; i < document.forms[0].elements.length; i++) {
		var elemento = document.forms[0].elements[i];
		if(elemento.value =="" && elemento.type=='text'){
			if(elemento.id =='cedula'){
				document.getElementById('mensajeCedula').innerHTML='<br>la cedula esta vacia';
			}
		elemento.style.border ='1px red solid';
		elemento.className='error';
		bandera=false;
		}
	}
	if(!bandera){
		alert('Error revisa los comentarios');
		return false;
	}else{
		return true;
	}
}