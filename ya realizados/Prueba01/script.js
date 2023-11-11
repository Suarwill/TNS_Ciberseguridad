/* 3 array, con datos de comienzo de septiembre, 
sus dias, y sus datos pluviometricos 
Dar un promedio semanal (semana completa) y mensual*/

const load = window.onload = ()=>{

    // variables a usar

    let Dias_Iniciales      = []
    let Dias_Num            = []
    let Dias_conteo_pluvial = []

    let prom_semana1 = 0
    let prom_semana2 = 0
    let prom_semana3 = 0
    let prom_mensual = 0
    

        // Generar Iniciales de la Semana para el mes de Septiembre
    let Iniciales = ["L","M","M","J","V","S","D"]
    for(var z=4 ; z < 30+4 ; z++ ){
        Dias_Iniciales.push (Iniciales[z % 7])
    }
        console.log (Dias_Iniciales)

        // Generar Numero de Dias y datos pluviales aleatorios
    for(var z=0 ; z < 30 ; z++ ){
        Dias_Num[z] = z+1 
        Dias_conteo_pluvial[z] = parseInt(Math.random()*100) / 25        
    }
    console.log (Dias_Num)
    console.log (Dias_conteo_pluvial)

        // Calcular promedio pluvial Semanas completas
    var suma1 = 0
    var suma2 = 0
    var suma3 = 0
    for(var z=4 ; z < 4+7 ; z++ ) {
        suma1 = suma1 + Dias_conteo_pluvial[z]
        suma2 = suma2 + Dias_conteo_pluvial[z+7]
        suma3 = suma3 + Dias_conteo_pluvial[z+14]
    }
    prom_semana1 = (parseInt((Number(suma1)*10) / 7)) / 10
    console.log('El promedio de lluvia de la primer semana en Septiembre fue de: '+ prom_semana1 + ' mm3')
    prom_semana2 = (parseInt((Number(suma2)*10) / 7)) / 10
    console.log('El promedio de lluvia de la segunda semana en Septiembre fue de: '+ prom_semana2 + ' mm3')
    prom_semana3 = (parseInt((Number(suma3)*10) / 7)) / 10
    console.log('El promedio de lluvia de la tercera semana en Septiembre fue de: '+ prom_semana3 + ' mm3')

        // Calcular promedio pluvial Mensual
    var suma = 0    
    for(var z=0 ; z < 30 ; z++ ) {
    suma = suma + Dias_conteo_pluvial[z]
    }
    prom_mensual = (parseInt((Number(suma)*100) / 30)) / 100
    console.log('El promedio de lluvia mensual en Septiembre fue de: '+ prom_mensual + ' mm3')
}