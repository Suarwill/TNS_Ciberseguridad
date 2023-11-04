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
    app.appendChild(button)
    br = document.createElement('br')
    app.append(br)
    const tabla = document.createElement('table')
    tabla.classList.add("table")
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
    fila.appendChild(titCol1)
    fila.appendChild(titCol2)
    fila.appendChild(titCol3)
    cabecera.appendChild(fila)
    tabla.appendChild(cabecera)
    app.appendChild(tabla)


}

const agregarRegistro = (e) =>{
const nombre = document.getElementById('nombre').value
const edad = document.getElementById('Edad').value
const registro = {nombre,edad}
const data = JSON.parse(localStorage.getItem('data'))||[]
data.push(registro)
localStorage.setItem('data',JSON.stringify(data))
llenarTabla(data)
}
const llenarTabla = (data) =>{
    const tabla = document.getElementById('personas')
    const body = document.createElement('tbody')
    cont = 1
    data.forEach(persona => {
        tr = document.createElement('tr')
        td = document.createElement('td')
        td.innerHTML = cont
        tr.appendChild(td)
        td
    })
}
