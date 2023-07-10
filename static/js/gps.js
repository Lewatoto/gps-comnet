function geoFindMe(){let latitudTexto=document.querySelector("#Latitud");let longitudTexto=document.querySelector("#Longitud");let labelEnlaceMapa=document.querySelector("#EnlaceMapa");let barraProgreso=document.querySelector("#barraProgreso");let noGeoDispositivo=document.querySelector("#NoGeoDispositivo");let noGeoActual=document.querySelector("#NoGeoActual");let copiarCoordenadas=document.querySelector("#CopiarCoordenadas");function success(position){const latitude=position.coords.latitude;const longitude=position.coords.longitude;latitudTexto.value=latitude;longitudTexto.value=longitude;if(!labelEnlaceMapa.classList.contains("is-hidden")){console.log("")}else{labelEnlaceMapa.classList.toggle("is-hidden")}if(!copiarCoordenadas.classList.contains("is-hidden")){console.log("")}else{copiarCoordenadas.classList.toggle("is-hidden")}let textoEnlace="https://www.google.com/maps/search/?api=1&query="+latitude+"%2c"+longitude;labelEnlaceMapa.href=textoEnlace;barraProgreso.classList.toggle("is-hidden")}function error(){noGeoActual.classList.toggle("is-hidden");noGeoActual.focus();barraProgreso.classList.toggle("is-hidden")}if(!navigator.geolocation){noGeoDispositivo.classList.toggle("is-hidden")}else{barraProgreso.classList.toggle("is-hidden");navigator.geolocation.getCurrentPosition(success,error)}}function CopiarCoordenadas(){let latitudTexto=document.querySelector("#Latitud");let longitudTexto=document.querySelector("#Longitud");let copiarCoordenadas=document.querySelector("#CopiarCoordenadas");let textoACopiar=latitudTexto.value+","+longitudTexto.value;navigator.clipboard.writeText(textoACopiar).then(()=>{console.log("Se copi\xf3");copiarCoordenadas.dataset.tooltip="Ubicaci\xf3n copiada";if(!copiarCoordenadas.classList.contains("has-tooltip-active")){copiarCoordenadas.classList.toggle("has-tooltip-active")}setTimeout(()=>{if(copiarCoordenadas.classList.contains("has-tooltip-active")){copiarCoordenadas.classList.toggle("has-tooltip-active")}delete copiarCoordenadas.dataset.tooltip},1e3)},()=>{console.log("No se copi\xf3")})}document.querySelector("#botonCoordenadas").addEventListener("click",geoFindMe);document.querySelector("#CopiarCoordenadas").addEventListener("click",CopiarCoordenadas);document.addEventListener("DOMContentLoaded",()=>{(document.querySelectorAll(".notification .delete")||[]).forEach($delete=>{const $notification=$delete.parentNode;$delete.addEventListener("click",()=>{$notification.parentNode.removeChild($notification)})})});
