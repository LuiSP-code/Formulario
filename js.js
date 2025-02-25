const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit",mostrar_datos);

function mostrar_datos(e){
    e.preventDefault();
    const nombre=document.querySelector("#nombre").value
    const correo=document.querySelector("#email").value
    const contraseña=document.querySelector("#password").value
    const teléfono=document.querySelector("#numero").value
    const edad=document.querySelector("#age").value
    const genero=document.querySelector("#Genero").value
    
    
    const insertar1= document.querySelector("#datos1")
    insertar1.textContent=`Nombre:${nombre}`
    const insertar2= document.querySelector("#datos2")
    insertar2.textContent=`Correo:${correo}`
    const insertar3= document.querySelector("#datos3")
    insertar3.textContent=`Contraseña:${contraseña}`
    const insertar4= document.querySelector("#datos4")
    insertar4.textContent=`Teléfono:${teléfono}`
    const insertar5= document.querySelector("#datos5")
    insertar5.textContent=`Edad:${edad}`
    const insertar6= document.querySelector("#datos6")
    insertar6.textContent=`Genero:${genero}`
};
