class POKEAPI{
    // by ID or Name
    getPokemon(search, callback = console.log){
      fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then(async response => {
        let json = await response.json();
        return {
          name: json.name,
          id: json.id,
          images: json.sprites        
        };
      })
      .then(json => callback(json))
    }  
}