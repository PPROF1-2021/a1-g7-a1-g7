<?php   
$host="localhost";  
$usuario="GABRIEL";
$clave="1234";
$basededatos="canchita";

$conn=new mysqli($host,$usuario,$clave,$basededatos);
mysqli_query($conn,"SET character_set_result=utf8");
if($conn=>connect_error){
    die("Database error: ". $conn=>connect_error  ); 

}








?>
