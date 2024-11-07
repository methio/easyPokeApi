# poke-class
Helper Class to use pokeapi HTTP API


## How to use

### Load the library
add the following tag to your html header
```html
<script src="https://cdn.jsdelivr.net/gh/methio/poke-class@latest/index.js"></script>
```

### Create an instance of the class 
```javascript
const api = new POKEAPI();
```

### You now have access to one method 

#### getPokemon()

```javascript
api.getPokemon(name, function (pokemonData) => {
  console.log(pokemonData);
});
```

The first parameter "name" can be pokemon name or ID.

the .getPokemon() method that get data from the pokeApi and gives you an object:
```javascript
{
    name:"pikachu",
    id:"25",
    images: {
        back_default: "url",
        front_default: "url",
        back_shiny: "url",
        front_shiny: "url",
        ...
    }
}
```