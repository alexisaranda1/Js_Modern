const reproductor = {
    reproducir:  function(){
        console.log("Reproduciendo funtion")
    },
}

reproductor.reproducir();

const reproductorDos = {
    reproducir: () => console.log("Reproduciendo desde arrow")
    ,
}

reproductorDos.reproducir();