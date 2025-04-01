export const fetchPokemonById = async (id) => {
    try {
        const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!pokemonResponse.ok) throw new Error('Pokémon not found');

        const pokemonData = await pokemonResponse.json();

        return {
            id: pokemonData.id,
            name: pokemonData.name,
            types: pokemonData.types.map(t => t.type.name),
            height: pokemonData.height / 10, // Convert to meters
            weight: pokemonData.weight / 10, // Convert to kilograms
            sprite: pokemonData.sprites.front_default || '/Poké_Ball_icon.svg.png',
            stats: pokemonData.stats.map(stat => ({
                name: stat.stat.name,
                value: stat.base_stat
            }))
        };
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
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
        try {
            const response = await fetch('/api/comment/create', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...commentData,
                    timestamp: new Date().toISOString()

                })
            });

            return response
        } catch (error) {
            console.error('Error fetching comments:', error);
            return [];
        }
    },

    async postComment(commentData) {
        try {
            const response = await fetch('/api/comment/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...commentData,
                    timestamp: new Date().toISOString()

                })
            });

            if (!response.ok) throw new Error('Failed to post comment');
            return await response.json();
        } catch (error) {
            console.error('Error posting comment:', error);
            throw error;
        }
    }
};
