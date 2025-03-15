// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let amigoNuevo=1;



function agregarAmigo()
        {
        //capturar valor
        let amigoNuevo = document.getElementById('amigo').value
        //validar entrada
        if (amigoNuevo==''&& amigos.length>0)
            {
            //document.getElementById('amigo').setAttribute('placeholder', 'ingresa un nombre válido')
            alert('Por favor, inserte un nombre')
            }
        //agregar al array
        else if (amigoNuevo != '')
        {
            amigos.push(amigoNuevo)
        }
        //limpiar caja
        let valorCaja = document.getElementById('amigo');
            valorCaja.value = '';
        }



agregarAmigo();

        //console.log(amigos);