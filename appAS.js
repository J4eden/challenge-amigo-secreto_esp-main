// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


//limpiar caja
function limpiarCaja()
        {
            let valorCaja = document.getElementById('amigo');
            valorCaja.value = '';
        }

function agregarAmigo()
        {
        //capturar valor
        let amigoNuevo = document.getElementById('amigo').value
        //validar entrada
        if (amigos.includes(amigoNuevo))
            {
                alert (`tu amigo ${amigoNuevo} ya está en la lista`)
                limpiarCaja();
                return;
            }
        
        if (amigoNuevo==''&& amigos.length>0)
            {
            //document.getElementById('amigo').setAttribute('placeholder', 'ingresa un nombre válido')
            alert('Por favor, inserte un nombre')
            }
        //agregar al array
        else if (amigoNuevo != '')
        {
            amigos.push(amigoNuevo);
            
        }
        
        limpiarCaja();
        actualizarLista();
        }
        

function actualizarLista()
        {
            //Obtener el elemento de la lista
            let listaAmigos = document.getElementById('listaAmigos');
            //Limpiar la lista existente
            listaAmigos.innerHTML = ''
            //Iterar sobre el arreglo
            for (let i=0; i < amigos.length; i++)
                {
                    let li=document.createElement('li');
                    li.textContent= amigos[i];
                    //Agregar elementos a la lista
                    listaAmigos.appendChild(li);
                }
        }


function sortearAmigo()
        {
            //Validar que haya amigos disponibles
            if (amigos.length==0)
                {
                    alert ('introduce nombres para comenzar a sortear');
                    return;
                }
            //Generar un índice aleatorio
            let numeroAleatorio = Math.floor(Math.random() * amigos.length);
            //Obtener el nombre sorteado
            let amigoSorteado = amigos[numeroAleatorio];
            console.log(amigoSorteado);
            //Mostrar el resultado
            let resultado = document.getElementById('resultado');
            resultado.innerHTML = `el amigo sorteado es ${amigoSorteado}`;
        }


agregarAmigo();

        //console.log(amigos);