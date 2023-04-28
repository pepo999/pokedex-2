let actualPageIndex;

getNextPage();

function getNextPage() {
    if (actualPageIndex === undefined) {
        actualPageIndex = 0;
    } else {
        actualPageIndex++;
    }
    PokeService.getPage(actualPageIndex).then(pokemons => {
        displayPokemons(pokemons);
    })
}

function getPreviousPage() {
    actualPageIndex--;
    PokeService.getPage(actualPageIndex).then(pokemons => {
        displayPokemons(pokemons);
    })
}

function displayPokemons(pokemons) {
    const pokemonContainer = document.getElementById('pokemon-container');
    pokemonContainer.innerHTML = '';
    for (const pokemon of pokemons) {
        pokemonContainer.innerHTML += `
        <details>
            <summary>
                <span>${pokemon.id}</span>
                <img class="list-image" src="${pokemon.sprites.front_default}" alt=""> 
               <span>${pokemon.name}</span> 
               <div class="spacer"></div>
              ${pokemon.types.map(object => `<span class="type"><br>${object.type.name}</span>`).join(' ')}
            </summary>
            <div class="stats-and-abilities">
                <ul> <h3>Stats:</h3>
                   ${pokemon.stats.map(object => `<li>${object.stat.name}: ${object.base_stat}</li>`).join(' ')} 
                </ul>
                <ul> <h3>Abilities:</h3>
                  ${pokemon.abilities.map(object => `<li>${object.ability.name}</li>`).join(' ')} 
                </ul>
            </div>
        </details>`
    }
}