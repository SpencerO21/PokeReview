export const fetchPokemonPage = async (page) => {
    const limit = 20; // Items per page
    const offset = (page - 1) * limit;

    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );

    const { results, count, next } = await response.json();

    // Fetch detailed data for each Pokémon
    const detailedResults = await Promise.all(
        results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
        })
    );

    return {
        results: detailedResults.map(pokemon => ({
            id: pokemon.id,
            name: pokemon.name,
            types: pokemon.types.map(t => t.type.name),
            sprite: pokemon.sprites.front_default
        })),
        hasMore: !!next // Determine if more pages exist
    };
};

