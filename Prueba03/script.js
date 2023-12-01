window.onload = () =>{
    showOpenai()
}
const showOpenai = () =>{
    app = document.getElementById('app')
    app.innerHTML = ''
        label_prompt = document.createElement('label')
        label_prompt.classList.add('label')
        label_prompt.for = 'prompt'

    // Creando área para ingresar la frase a traducir
    const sol_prompt = document.createElement('textarea')
        sol_prompt.placeholder = 'Ingrese la frase a traducir:'
        sol_prompt.id = 'prompt'
        sol_prompt.classList.add('form-control')
        sol_prompt.style.height= '300px'
        sol_prompt.style.width= '500px'
        sol_prompt.style.backgroundImage = 'linear-gradient(180deg, #adffff 0, #a4ffff 25%, #9df2f2 50%, #97dade 75%, #92c5cb 100%)'
        app.appendChild(sol_prompt)
    var br = document.createElement('br')
    app.append(br)

    //Creando el Opcional de Idioma a traducir
        label_idioma = document.createElement('label')
        label_idioma.innerText = 'Traducir al siguiente Idioma :'
        label_idioma.classList.add('label')
        label_idioma.for = 'idioma'
        app.appendChild(label_idioma)
    const sl_idioma = document.createElement('select')
        sl_idioma.id = 'idioma'
        sl_idioma.classList.add('form-control')
        sl_idioma.style.width= '200px'
        idiomas = ["Inglés",    "Chino Mandarín",   "Portugués",
                    "Italiano", "Bengalí",          "Frances",
                    "Ruso",     "Japonés",          "Turco",
                    "Árabe",    "Hindú",            "Danés"]
        idiomas.forEach(idioma => {
        opt = document.createElement('option')
        opt.innerText= idioma
        sl_idioma.appendChild(opt)
        });
        app.appendChild(sl_idioma)
        app.append(br)

    // Creando Botones, se agrego un fondo de color degradado
    const button = document.createElement('button')
        button.innerText = "Traducir"
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
    const idiomaTraducir = document.getElementById('idioma').value
    const solicitud = `" ${prompt} " traduce lo anterior dicho al siguiente idioma: "${idiomaTraducir}" `
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
            h5.innerText = "La traducción es la siguiente:"
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
