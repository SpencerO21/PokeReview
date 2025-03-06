export const fetchPokemonById = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const types = ['Fire', 'Water', 'Grass', 'Electric', 'Psychic'];
            const names = ['Charizard', 'Blastoise', 'Venusaur', 'Pikachu', 'Mewtwo'];

            const pokemon = {
                id,
                name: `${names[(id - 1) % names.length]} #${id}`,
                type: types[(id - 1) % types.length],
                description: `A majestic ${types[(id - 1) % types.length]} type Pokémon`,
                height: (id * 10) % 100,
                weight: (id * 5) % 200
            };

            resolve(pokemon);
        }, 1000);
    });
};

let mockComments = [
    {
        id: 1,
        pokemonId: 1,
        author: "Ash",
        text: "This Pokémon is awesome!",
        timestamp: "2024-02-20T12:34:56Z"
    }
];

export const commentApi = {
    async getComments(pokemonId) {
        await new Promise(resolve => setTimeout(resolve, 500));
        return mockComments.filter(c => c.pokemonId === pokemonId);
    },

    async postComment(commentData) {
        await new Promise(resolve => setTimeout(resolve, 500));

        const newComment = {
            ...commentData,
            id: Date.now(),
            timestamp: new Date().toISOString()
        };

        mockComments.push(newComment);
        return newComment;
    }
};