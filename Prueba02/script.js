/*          Evaluación 2 DDS
            Debe generar una webApp que considere los siguientes puntos:

-	Disponibilidad de los CDN de Bootstrap
-	Link que lleve a una vista con un formulario que permita ingresar los siguientes campos, de una mascota
    o   Nombre
    o   Tipo de Animal (Perro, gato, Tortuga, etc)
    o   Nombre del Dueño
    o   Teléfono del dueño.
-	Los datos deben almacenarse en Local Storage del navegador.
-	Debe implementar las funciones CRUD para el formulario (Crear , Leer, Editar y Borrar)
-	Los datos deben mostrarse en una estructura de tabla html.
-	Debe generar un repositorio en GIT y compartirlo vía email al profesor
-	Debe utilizar las clases de Bootstrap para optimizar el look and feel de los componentes.                   */

const handleClickHome = () =>{
    const app = document.getElementById('app')
    app.innerHTML = ''
    label_nombre = document.createElement('label')
    label_nombre.innerText = 'Nombre :'
    label_nombre.classList.add('label')
    label_nombre.for = 'nombre'
    app.appendChild(label_nombre)
    const nombre = localStorage.getItem('nombre')
    const input_nombre = document.createElement('input')
    input_nombre.type = 'text'
    input_nombre.placeholder = 'Ingrese su nombre'
    input_nombre.id = 'nombre'
    input_nombre.classList.add('form','form-control')
    input_nombre.style.width = '200px'
    input_nombre.onkeyup = (e) =>{handleKeyUpNombre(e)}
    input_nombre.value = nombre
    app.appendChild(input_nombre)

    var br = document.createElement('br')
    app.append(br)
    
    const label_edad = document.createElement('label')
    label_edad.innerText = 'Edad :'
    label_edad.classList.add('label')
    label_edad.for = 'edad'
    app.appendChild(label_edad)

    const input_edad = document.createElement('input')
    input_edad.type = 'number'
    input_edad.placeholder = 'Ingrese edad'
    input_edad.id = 'edad'
    input_edad.classList.add('form',"form-control")
    input_edad.style.width = '200px'
    input_edad.max="100"
    input_edad.min="1"
    input_edad.value = localStorage.getItem('edad')
    input_edad.onchange= (e) => {handleKeyUpEdad(e)}
    input_edad.step=1
    app.appendChild(input_edad) 
    
    br = document.createElement('br')
    app.append(br) 

    const submit = document.createElement('input')
    submit.type = 'submit'
    submit.value = "Enviar"
    submit.classList.add('btn','btn-success') //boostrap
    app.appendChild(submit)
    const button = document.createElement('button')
    button.innerText = "Borrar Storage"
    button.classList.add('btn','btn-danger') //boostrap
    button.onclick = () => clearStorage()
    app.appendChild(button)
}
const handleKeyUpNombre =  (e) =>{
     localStorage.setItem('nombre',e.target.value)
}
const handleKeyUpEdad =  (e) =>{
    localStorage.setItem('edad',e.target.value)
}
const clearStorage = () =>{
    localStorage.clear()
    console.log('Se ha borrado el storage')
}
const showTablaView = () =>{
    const app =document.getElementById('app')
    app.innerHTML = ''
    const div = document.createElement('div')
    label_nombre = document.createElement('label')
    label_nombre.innerText = 'Nombre :'
    label_nombre.classList.add('label')
    label_nombre.for = 'nombre'
    app.appendChild(label_nombre)
    const input_nombre = document.createElement('input')
    input_nombre.type = 'text'
    input_nombre.placeholder = 'Ingrese su nombre'
    input_nombre.id = 'nombre'
    input_nombre.classList.add('form','form-control')
    input_nombre.style.width = '200px'
    app.appendChild(input_nombre)
    var br = document.createElement('br')
    app.append(br) 
    const label_edad = document.createElement('label')
    label_edad.innerText = 'Edad :'
    label_edad.classList.add('label')
    label_edad.for = 'edad'

    app.appendChild(label_edad)

    const input_edad = document.createElement('input')
    input_edad.type = 'number'
    input_edad.placeholder = 'Ingrese edad'
    input_edad.id = 'edad'
    input_edad.classList.add('form',"form-control")
    input_edad.style.width = '200px'
    input_edad.max="100"
    input_edad.min="1"
    input_edad.step=1
 
    app.appendChild(input_edad) 
    br = document.createElement('br')
    app.append(br) 
    const button = document.createElement('button')
    button.innerText = "Agregar"
    button.classList.add('btn','btn-success') //boostrap
    button.onclick = (e) => agregarRegistro(e)
    app.appendChild(button)
    br = document.createElement('br')
    app.append(br)
    const tabla = document.createElement('table')
    tabla.classList.add("table")
    tabla.id = "personas"
    const cabecera = document.createElement('thead')
    const fila = document.createElement('tr')
    const titCol1 = document.createElement('th')
    titCol1.scope = 'col'
    titCol1.innerText = "#"
    const titCol2 = document.createElement('th')
    titCol2.scope = 'col'
    titCol2.innerText = "Nombre"
    const titCol3 = document.createElement('th')
    titCol3.scope = 'col'
    titCol3.innerText = "Edad"
    const titCol4 = document.createElement('th')
    titCol4.scope = 'col'
    titCol4.innerText = "Eliminar"
    fila.appendChild(titCol1)
    fila.appendChild(titCol2)
    fila.appendChild(titCol3)
    fila.appendChild(titCol4)
    cabecera.appendChild(fila)
    tabla.appendChild(cabecera)
    app.appendChild(tabla)
    llenarTabla(JSON.parse(localStorage.getItem('data')))

}
const agregarRegistro = (e) =>{
  const nombre = document.getElementById('nombre').value
  const edad = document.getElementById('edad').value
  if(nombre == '' || edad == ''){
    alert('Nombre y edad son requeridos')
    return
  }
  const registro = {nombre,edad}
  const data = JSON.parse(localStorage.getItem('data'))||[]
  data.push(registro)
  localStorage.setItem('data',JSON.stringify(data))
  const tbody = document.getElementById("datos_personas")
  tbody.parentNode.removeChild(tbody)
  llenarTabla(data)
  document.getElementById('nombre').value = ''
  document.getElementById('edad').value = ''
}
const llenarTabla= (data) =>{
  const tabla = document.getElementById("personas")
  const tbody = document.createElement('tbody')
  tbody.id = "datos_personas"
  var cont = 1
  data.forEach(persona => {
    tr = document.createElement('tr')
    td = document.createElement('td')
    td.innerHTML = cont
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = persona.nombre
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = persona.edad
    tr.appendChild(td)
    td = document.createElement('td')
    btnBorrar = document.createElement('button')
    btnBorrar.classList.add('btn','btn-danger')
    btnBorrar.innerHTML = "Borrar"
    btnBorrar.id = cont-1
    btnBorrar.onclick = (e) => borrarRegistro(e)
    td.appendChild(btnBorrar)
    const btnEditar = document.createElement('button')
    btnEditar.classList.add('btn','btn-warning')
    btnEditar.innerHTML = "Editar"
    btnEditar.id = `edit_${cont-1}`
    btnEditar.onclick = (e) => {editarRegistro(e,persona)}
    btnEditar.type="button"
    btnEditar.setAttribute("data-bs-toggle","modal")
    btnEditar.name = cont-1
    btnEditar.setAttribute("data-bs-target","#editModal")
    td.appendChild(btnEditar)
    tr.appendChild(td)
    tbody.appendChild(tr)
    cont++
  });
  tabla.appendChild(tbody)
{/* <button type="button" class="btn btn-primary" */}
//  data-bs-toggle="modal" data-bs-target="#editModal" >Editar</button>
}
const borrarRegistro = (e) =>{
  console.log(e.target.id)
  var data = JSON.parse(localStorage.getItem('data'))
  data.splice(e.target.id,1)
  localStorage.setItem('data',JSON.stringify(data))
  const tbody = document.getElementById("datos_personas")
  tbody.parentNode.removeChild(tbody)
  llenarTabla(JSON.parse(localStorage.getItem('data')))

}

const editarRegistro = (e,persona) =>{
  console.log(persona)
  console.log(e.target.name)
  const edit_nombre = document.getElementById('edit_nombre')
  const edit_edad = document.getElementById('edit_edad')
  const numero_registro = document.getElementById('numero_registro')
  edit_nombre.value = persona.nombre
  edit_edad.value = persona.edad
  numero_registro.value = e.target.name

}
const guardarRegistro = async () =>{
  const numero_registro = document.getElementById('numero_registro').value
  const edit_nombre = document.getElementById('edit_nombre').value
  const edit_edad = document.getElementById('edit_edad').value
  var data = JSON.parse(localStorage.getItem('data'))
  data[numero_registro].nombre = edit_nombre
  data[numero_registro].edad = edit_edad
  localStorage.setItem('data',JSON.stringify(data))
  const tbody = document.getElementById("datos_personas")
  tbody.parentNode.removeChild(tbody)
  llenarTabla(JSON.parse(localStorage.getItem('data')))
}