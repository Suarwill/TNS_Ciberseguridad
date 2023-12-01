window.onload = () =>{
    showOpenai()
}
const showOpenai = () =>{
    app = document.getElementById('app')
    app.innerHTML = ''
    
        label_prompt = document.createElement('label')
        label_prompt.classList.add('label')
        label_prompt.for = 'prompt'

    // Creando área para ingresar la formula a calcular
    const sol_prompt = document.createElement('textarea')
        sol_prompt.placeholder = 'Ingrese la formula que desea calcular:'
        sol_prompt.id = 'prompt'
        sol_prompt.classList.add('form-control')
        sol_prompt.style.height= '60px'
        sol_prompt.style.width= '500px'
        sol_prompt.style.backgroundImage = 'linear-gradient(180deg, #adffff 0, #a4ffff 25%, #9df2f2 50%, #97dade 75%, #92c5cb 100%)'
        app.appendChild(sol_prompt)
    var br = document.createElement('br')
    app.append(br)

    // Creando Botones, se agrego un fondo de color degradado
    const button = document.createElement('button')
        button.innerText = "Calcular"
        button.classList.add('btn','btn-success')
        button.style.color= 'green'
        button.style.backgroundImage = 'linear-gradient(145deg, #d1fff8 0, #befff6 10%, #a7fff4 20%, #8dfff3 30%, #6cfbf2 40%, #3cf2f2 50%, #00e8f3 60%, #00dff5 70%, #00d6f9 80%, #00cefd 90%, #00c6ff 100%)'
        button.style.position= 'center'
        button.onclick = (e) => enviarOpenAi()
        app.appendChild(button)
    // Boton en blanco para dar espacio a los botones laterales
    // Fue resuelto de forma arcaica, pero funcional estéticamente
    const buttonM = document.createElement('buttonM')
        buttonM.innerText = " . . . . . "
        buttonM.style.color= 'white'
        app.appendChild(buttonM)
    const buttonClear = document.createElement('button')
        buttonClear.innerText = "Limpiar"
        buttonClear.classList.add('btn','btn-danger')
        buttonClear.style.color= 'red'
        buttonClear.style.backgroundImage = 'linear-gradient(145deg, #fbf3e6 0, #f9eddd 10%, #f7e5d3 20%, #f5ddc9 30%, #f4d3bf 40%, #f2c9b5 50%, #f0beac 60%, #efb5a6 70%, #edaba1 80%, #eca39f 90%, #e99b9f 100%)' 
        buttonClear.onclick = (e) => showOpenai()
        app.appendChild(buttonClear)
    br = document.createElement('br')
    app.append(br)
}

const enviarOpenAi = async () =>{
    app = document.getElementById('app')
        console.log("Calling GPT3")

    // configurando openAI (URL y APIKEY)    
    var url = "https://api.openai.com/v1/chat/completions";
    var api = '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'
    var bearer = `Bearer ${api}`

    // Estructura de la solicitud A OPENAI
    const prompt = document.getElementById('prompt').value
    const respuestaNegativa = 'Favor ingresa una fórmula matemática'
    const solicitud = `Calcula lo siguiente " ${prompt} " y muestra solo el resultado, si lo anterior no es posible calcular, solo responde ${respuestaNegativa} `
    const requestOptions = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `${bearer}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": solicitud}],
        // Temperature: Rango entre 0 y 2 (mas alto es mas random)
            "temperature": 0.4               
        })
    };

    // Configurando JSON
    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        try{
            miData = JSON.parse(data.choices[0].message.content)
            console.log(miData)
        }catch(e){}
        divCard = document.createElement('div')
            divCard.classList.add('card')
        divHeader = document.createElement('div')
            divHeader.classList.add('card-header')
            divHeader.innerText = prompt
            divHeader.style.paddingLeft="50px"
        divBody = document.createElement('div')
        h5 = document.createElement('h6')
            h5.classList.add('card-title')
            h5.innerText = "La respuesta es la siguiente:"
            h5.style.padding = "20px"
        parrafo = document.createElement('p')
            parrafo.classList.add("card-text")
            parrafo.innerHTML = data.choices[0].message.content
            parrafo.style.padding = "10px"
        divBody.appendChild(h5)
        divBody.appendChild(parrafo)
        divCard.appendChild(divHeader)
        divCard.appendChild(divBody)
        app.appendChild(divCard)
        br = document.createElement('br')
            app.appendChild(br)
        textPrompt = document.getElementById('prompt')
            textPrompt.value = ''
    } catch (error) {
        console.error('Error:', error);
        return 'Error occurred while fetching data';
    }
}