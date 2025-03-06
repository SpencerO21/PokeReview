export const fetchPokemonById = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const types = ['Fire', 'Water', 'Grass', 'Electric', 'Psychic'];
            const names = ['Charizard', 'Blastoise', 'Venusaur', 'Pikachu', 'Mewtwo'];

            const pokemon = {
                id,
                name: `${names[(id - 1) % names.length]} #${id}`,
                type: types[(id - 1) % types.length],
                description: `A majestic ${types[id % types.length]} type Pokémon`,
                height: (id * 10) % 100,
                weight: (id * 5) % 200
            };

            resolve(pokemon);
        }, 1000);
    });
};