//Consultar la API
const consultarPokemon = (id, number) =>{

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    .then(response=>{
        return response.json()
    })
    .then(data=>{
        pintarPokemon(data,number);
    })
    .catch(error=>{
        console.log(error);
    })

}

//Generar Los pokemones de forma random
const btnSeleccionar = () =>{
    let primerPokemon = Math.round(Math.random()*150)
    let segundoPokemon = Math.round(Math.random()*150)
    consultarPokemon(primerPokemon,1)
    consultarPokemon(segundoPokemon,2)

}

//invocar la funcion
btnSeleccionar()

//Obtener la referencia del div donde se va a pintar 
//los pokemons
const lista = document.getElementById("listarpokemon")

//Presentar los pokemon
const pintarPokemon = (data,id)=>{
    let item = lista.querySelector(`#pok-${id}`)
    item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default)
    console.log(item.getElementsByTagName("p"));
    item.getElementsByTagName("p")[0].innerHTML=data.name
}