class PokeService {

    static PAGE_COUNTER = 20;

    static BASE_URL = 'https://pokeapi.co/api/v2/';

    static getPage(index) {
        const url = this.BASE_URL + 'pokemon?limit=' + this.PAGE_COUNTER + '&offset=' + this.PAGE_COUNTER * index;
        return fetch(url)
            .then(resp => resp.json())
            .then(pokemonPage => this.getDetails(pokemonPage.results));
    }

    static getDetails(pokemonNames) {
        const requests = [];
        for (const pokemon of pokemonNames) {
            const url = this.BASE_URL + 'pokemon/' + pokemon.name;
            const request = fetch(url).then(resp => resp.json());
            requests.push(request);
        }
        return Promise.all(requests);
    }



}