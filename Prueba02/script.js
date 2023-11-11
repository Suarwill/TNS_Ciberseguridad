/*          Evaluación 2 DDS
            Debe generar una WebApp que considere los siguientes puntos:

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
    label_nombre.innerText = 'Nombre de mascota :'
    label_nombre.classList.add('label')
    label_nombre.for = 'nombre'
    app.appendChild(label_nombre)
  const nombre = localStorage.getItem('nombre')
  const input_nombre = document.createElement('input')
    input_nombre.type = 'text'
    input_nombre.placeholder = 'Ingrese nombre'
    input_nombre.id = 'nombre'
    input_nombre.classList.add('form','form-control')
    input_nombre.style.width = '200px'
    input_nombre.onkeyup = (e) =>{handleKeyUpNombre(e)}
    input_nombre.value = nombre
    app.appendChild(input_nombre)
  var br = document.createElement('br')
    app.append(br)
    
  const label_tipo = document.createElement('label')
    label_tipo.innerText = 'Tipo de Animal:'
    label_tipo.classList.add('label')
    label_tipo.for = 'tipo'
    app.appendChild(label_tipo)
  const input_tipo = document.createElement('input')
    input_tipo.type = 'text'
    input_tipo.placeholder = 'Ingrese tipo'
    input_tipo.id = 'tipo'
    input_tipo.classList.add('form',"form-control")
    input_tipo.style.width = '150px'
    input_tipo.value = localStorage.getItem('tipo')
    input_tipo.onchange= (e) => {handleKeyUpTipo(e)}
    app.appendChild(input_tipo) 
  br = document.createElement('br')
    app.append(br)

  const label_dueño = document.createElement('label')
    label_dueño.innerText = 'Nombre del dueño:'
    label_dueño.classList.add('label')
    label_dueño.for = 'dueño'
    app.appendChild(label_dueño)
  const input_dueño = document.createElement('input')
    input_dueño.type = 'text'
    input_dueño.placeholder = 'Ingrese nombre'
    input_dueño.id = 'dueño'
    input_dueño.classList.add('form',"form-control")
    input_dueño.style.width = '200px'
    input_dueño.value = localStorage.getItem('dueño')
    input_dueño.onchange= (e) => {handleKeyUpDueño(e)}
    app.appendChild(input_dueño) 
  br = document.createElement('br')
    app.append(br)
    
  const label_telefono = document.createElement('label')
    label_telefono.innerText = 'Teléfono del dueño:'
    label_telefono.classList.add('label')
    label_telefono.for = 'telefono'
    app.appendChild(label_telefono)
  const input_telefono = document.createElement('input')
    input_telefono.type = 'text'
    input_telefono.placeholder = 'Ingrese número +56'
    input_telefono.id = 'telefono'
    input_telefono.classList.add('form',"form-control")
    input_telefono.style.width = '200px'
    input_telefono.value = localStorage.getItem('telefono')
    input_telefono.onchange= (e) => {handleKeyUpTelefono(e)}
    app.appendChild(input_telefono) 
  br = document.createElement('br')
    app.append(br)

  const submit = document.createElement('input')
    submit.type = 'submit'
    submit.value = "Ingresar"
    submit.classList.add('btn','btn-success') //diseño boostrap
    submit.onclick = (e) => agregarRegistro(e)
    app.appendChild(submit)

  const button = document.createElement('button')
    button.innerText = "Borrar Listado"
    button.classList.add('btn','btn-danger') //diseño boostrap
    button.onclick = () => clearStorage()
    app.appendChild(button)
}
const handleKeyUpNombre =  (e) =>{
     localStorage.setItem('nombre',e.target.value)
}
const handleKeyUpTipo =  (e) =>{
    localStorage.setItem('tipo',e.target.value)
}
const handleKeyUpDueño =  (e) =>{
  localStorage.setItem('dueño',e.target.value)
}
const handleKeyUpTelefono =  (e) =>{
  localStorage.setItem('telefono',e.target.value)
}
const clearStorage = () =>{
    localStorage.clear()
    console.log('Se ha borrado el storage')
}
const showTablaView = () =>{
  const app =document.getElementById('app')
    app.innerHTML = ''
  const tabla = document.createElement('table')
    tabla.classList.add("table")
    tabla.id = "mascotas"
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
    titCol3.innerText = "Tipo"
  const titCol4 = document.createElement('th')
    titCol4.scope = 'col'
    titCol4.innerText = "Dueño"
  const titCol5 = document.createElement('th')
    titCol5.scope = 'col'
    titCol5.innerText = "Teléfono"
  const titCol6 = document.createElement('th')
    titCol6.scope = 'col'
    titCol6.innerText = "Eliminar"
    fila.appendChild(titCol1)
    fila.appendChild(titCol2)
    fila.appendChild(titCol3)
    fila.appendChild(titCol4)
    fila.appendChild(titCol5)
    fila.appendChild(titCol6)    
    cabecera.appendChild(fila)
    tabla.appendChild(cabecera)
    app.appendChild(tabla)
    llenarTabla(JSON.parse(localStorage.getItem('data')))
}
const agregarRegistro = (e) =>{
  const nombre = document.getElementById('nombre').value
  const tipo = document.getElementById('tipo').value
  const dueño = document.getElementById('dueño').value
  const telefono = document.getElementById('telefono').value  
  if(nombre == '' || tipo == ''|| dueño == ''|| telefono == ''){
    alert('Se requiere completar todos los datos')
    return
  }
  const registro = {nombre,tipo,dueño,telefono}
  const data = JSON.parse(localStorage.getItem('data'))||[]
  data.push(registro)
  localStorage.setItem('data',JSON.stringify(data))
  const tbody = document.getElementById("datos_mascotas")
  tbody.parentNode.removeChild(tbody)
  llenarTabla(data)
  document.getElementById('nombre').value = ''
  document.getElementById('tipo').value = ''
  document.getElementById('dueño').value = ''
  document.getElementById('telefono').value = ''
}
const llenarTabla= (data) =>{
  const tabla = document.getElementById("mascotas")
  const tbody = document.createElement('tbody')
  tbody.id = "datos_mascotas"
  var cont = 1
  data.forEach(mascota => {
    tr = document.createElement('tr')
    td = document.createElement('td')
    td.innerHTML = cont
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = mascota.nombre
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = mascota.tipo
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = mascota.dueño
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = mascota.telefono
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
    btnEditar.onclick = (e) => {editarRegistro(e,mascota)}
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
}
const borrarRegistro = (e) =>{
  console.log(e.target.id)
  var data = JSON.parse(localStorage.getItem('data'))
  data.splice(e.target.id,1)
  localStorage.setItem('data',JSON.stringify(data))
  const tbody = document.getElementById("datos_mascotas")
  tbody.parentNode.removeChild(tbody)
  llenarTabla(JSON.parse(localStorage.getItem('data')))

}
const editarRegistro = (e,mascota) =>{
  console.log(mascota)
  console.log(e.target.name)
  const edit_nombre = document.getElementById('edit_nombre')
  const edit_tipo = document.getElementById('edit_tipo')
  const edit_dueño = document.getElementById('edit_dueño')  
  const edit_telefono = document.getElementById('edit_telefono')
  const numero_registro = document.getElementById('numero_registro')
  edit_nombre.value = mascota.nombre
  edit_tipo.value = mascota.tipo
  edit_dueño.value = mascota.dueño
  edit_telefono.value = mascota.telefono
  numero_registro.value = e.target.name
}
const guardarRegistro = async () =>{
  const numero_registro = document.getElementById('numero_registro').value
  const edit_nombre = document.getElementById('edit_nombre').value
  const edit_tipo = document.getElementById('edit_tipo').value
  const edit_dueño = document.getElementById('edit_dueño').value
  const edit_telefono = document.getElementById('edit_telefono').value  
  var data = JSON.parse(localStorage.getItem('data'))
  data[numero_registro].nombre = edit_nombre
  data[numero_registro].tipo = edit_tipo
  data[numero_registro].dueño = edit_dueño
  data[numero_registro].telefono = edit_telefono
  localStorage.setItem('data',JSON.stringify(data))
  const tbody = document.getElementById("datos_mascotas")
  tbody.parentNode.removeChild(tbody)
  llenarTabla(JSON.parse(localStorage.getItem('data')))
}
