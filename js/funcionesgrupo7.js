function findme(){
    var output= document.getElementById("map");
    if(navigator.geolocation){
      output.innerHTML = " <p> tu navegador soporta geolocalizacion </p> ";
    }else
      { output.innerHTML ="<p> tu navegador no soporta geolocalizacion</p>";

      }
      function localizacion (posicion){
        var latitude = posicion.coords.latitude;
        var longitude = posicion.coords.longitude; 
        output.innerHTML ="<p> latitud:"+latitude+"<br> longitud:"+longitude+"</p>";
      }
      function error (){
        output.innerHTML ="<p> no se pudo obtener tu ubicacion</p>"




      }
      navigator.geolocation.getCurrentPosition(localizacion,error);

      }
    
  

    function alerta(){
            alert("REGISTRADO CORRECTAMENTE");
            
        }
    
    
  