<?php
$catalejo = 'decorplastcolombia@gmail.com';

 $to = $catalejo; 
 $from = $_REQUEST['email'] ; 
 $headers = "From: $from"; 
 $subject = "Decorplast Colombia"; 

 $fields = array(); 
 $fields{"name"} = "Nombre: "; 
 $fields{"email"} = "Email: "; 
 $fields{"establecimiento"} = "Establecimiento: "; 
  $fields{"telefono"} = "Teléfono: ";
   $fields{"celular"} = "Celular: ";
    $fields{"direccion"} = "Direccion: ";
	 $fields{"paginaweb"} = "Pagina web: ";
	  $fields{"cedula"} = "Numero de Cedula: ";
	  $fields{"nit"} = "NIT: ";
	  $fields{"ciudad"} = "Ciudad: ";
	  $fields{"mensaje"} = "Mensaje: ";
   

 
 
 $body = "En Decorplast Colombia hemos recibido la siguiente información: \n\n"; 
 foreach($fields as $a => $b){ 	$body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); } 

$headers2 = ""; 
 $subject2 = "decorplastcolombia@gmail.com"; 
 $autoreply = "Gracias por escribirnos, muy pronto nos comunicaremos con usted.";
 
 $send = mail($to, $subject, $body, $headers); 
 $send2 = mail($from, $subject2, $autoreply, $body); 

 if($send) 
 {
	
	 header( "Location: http://www.decorplastcolombia.com/" );} 
 else 
 {print "Hemos encontrado un error por favor notificarlo a catalejows@gmail.com"; 
 } 
 
 ?> 
 
