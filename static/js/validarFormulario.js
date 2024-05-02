function validarFormulario(){

let nombre = document.getElementById("nombre").value.trim()
let apellido = document.getElementById("apellido").value.trim()
let error = document.getElementById("campos")


if(nombre ===""){
    alert("Complete los datos obligatorios, por favor.")
    error.style.color = red
    return false
}

if(apellido ===""){
    alert("Complete los datos obligatorios, por favor.")
    error.style.color = red
    return false
}

if (!/^[a-zA-Z]+$/.test(nombre)){
    error.textContent = "Ingrese un nombre válido"
    error.style.color = "red"
    return false
} 

if (!/^[a-zA-Z]+$/.test(apellido)){
    error.textContent = "Ingrese un apellido válido"
    error.style.color = "red"
    return false
} 

alert("Formulario enviado correctamente")
return true

}