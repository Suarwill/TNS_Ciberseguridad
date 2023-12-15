window.onload = () =>{
    sorteoLoto()
}
const sorteoLoto = () =>{
    app = document.getElementById('app')
    app.innerHTML = ''
        label_sorteo = document.createElement('label')
        label_sorteo.classList.add('label')
        label_sorteo.for = 'sorteo'

    //Numeros a Elegir
    const nums = ["01","02","03","04","05","06","07","08","09","10",
                "11","12","13","14","15","16","17","18","19","20",
                "21","22","23","24","25","26","27","28","29","30",
                "31","32","33","34","35","36","37","38","39","40",
                "41","42"]

    //Creando el Opcional de Idioma a traducir
    const n1 = document.createElement('select')
        n1.id = 'opcion1'
        n1.classList.add('form-control')
        n1.style.width= '50px'
    const n2 = document.createElement('select')
        n2.id = 'opcion2'
        n2.classList.add('form-control')
        n2.style.width= '50px'
    const n3 = document.createElement('select')
        n3.id = 'opcion3'
        n3.classList.add('form-control')
        n3.style.width= '50px'
    const n4 = document.createElement('select')
        n4.id = 'opcion4'
        n4.classList.add('form-control')
        n4.style.width= '50px'
    const n5 = document.createElement('select')
        n5.id = 'opcion5'
        n5.classList.add('form-control')
        n5.style.width= '50px'
    const n6 = document.createElement('select')
        n6.id = 'opcion6'
        n6.classList.add('form-control')
        n6.style.width= '50px'

        nums.forEach(num => {
            opt = document.createElement('option')
            opt.innerText= num
            n1.appendChild(opt)
        });
        nums.forEach(num => {
            opt = document.createElement('option')
            opt.innerText= num
            n2.appendChild(opt)
        });
        nums.forEach(num => {
            opt = document.createElement('option')
            opt.innerText= num
            n3.appendChild(opt)
        });
        nums.forEach(num => {
            opt = document.createElement('option')
            opt.innerText= num
            n4.appendChild(opt)
        });
        nums.forEach(num => {
            opt = document.createElement('option')
            opt.innerText= num
            n5.appendChild(opt)
        });
        nums.forEach(num => {
            opt = document.createElement('option')
            opt.innerText= num
            n6.appendChild(opt)
        });
        app.appendChild(n1)
        app.appendChild(n2)
        app.appendChild(n3)
        app.appendChild(n4)
        app.appendChild(n5)
        app.appendChild(n6)
    br = document.createElement('br')
        app.append(br)

    // Creando Boton, se agrego un fondo de color degradado
    const button = document.createElement('button')
        button.innerText = "Terminar"
        button.classList.add('btn','btn-success')
        button.style.color= 'red'
        button.style.backgroundImage = 'linear-gradient(145deg, #d1fff8 0, #befff6 10%, #a7fff4 20%, #8dfff3 30%, #6cfbf2 40%, #3cf2f2 50%, #00e8f3 60%, #00dff5 70%, #00d6f9 80%, #00cefd 90%, #00c6ff 100%)'
        button.style.position= 'center'
        button.onclick = (e) => realizarSorteo()
        app.appendChild(button)
    br = document.createElement('br')
    app.append(br)
}

const realizarSorteo = async () =>{
    app = document.getElementById('app')
        console.log("Realizando Sorteo Ficticio")
        const elegidos = [
            document.getElementById('opcion1').value,
            document.getElementById('opcion2').value,
            document.getElementById('opcion3').value,
            document.getElementById('opcion4').value,
            document.getElementById('opcion5').value,
            document.getElementById('opcion6').value
        ]
        const userEleccion = elegidos.map(num => parseInt(num, 10))

    // Ordenando eleccion de Usuario
        userEleccion.sort((a,b) => a-b)
        console.log("El usuario a elegido los siguientes numeros: ")
        console.log(userEleccion)

    // Buscando que no haya repeticiones
        var u = 0
        while (u !== 6){
        if (u > 0 && userEleccion[u] == userEleccion[u - 1]){
            alert("Ha elegido un numero de forma repetida, favor elija números diferentes entre si")
            u++}
        else {
            u++
        }}

    // Realizando Sorteo y comparando
    var azarSorteo = []
    var i = 0
    while (i !== 6){
        azarSorteo[i] = parseInt((Math.random()*41)+1)
        if (i > 0 && azarSorteo[i] === azarSorteo[i - 1]){
        continue}
        else {
            i++
        }
    }
    azarSorteo.sort((a,b) => a-b)
    console.log(azarSorteo)

    // Comparando y Mostrando resultado
    var aciertos = 0
    var a = 0
    while (a !== 6){
    if (azarSorteo[a] === userEleccion[a]){
        aciertos++
        a++
    }
    else{
        a++
    }}
    console.log("Cantidad de aciertos: ",aciertos)

    // Deduciendo a que premio es Acreedor (de forma ficticia)
    if (aciertos === 6 ){
        console.log ("Ha ganado, acertó 6 numeros")
        alert("Usted es el GANADOR de Loto!!!")
        }
    if (aciertos === 5 ){
        console.log ("QUINA, acertó 5 numeros")
        alert("Usted es ganó con QUINA")
        }
    if (aciertos === 4 ){
        console.log ("CUATERNA, acertó 4 numeros")
        alert("Usted es ganó con CUATERNA")
        }  
    if (aciertos === 4 ){
        console.log ("CUATERNA, acertó 4 numeros")
        alert("Usted es ganó con CUATERNA")
        }
    if (aciertos === 3 ){
        console.log ("TERNA, acertó 3 numeros")
        alert("Usted es ganó con TERNA")
        }          
    else{
        console.log("No ha ganado")
        alert("Lamentablemente no ha ganado")
        }
    }