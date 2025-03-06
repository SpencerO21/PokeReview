// Mock data generator
const generateMockPokemon = (page, perPage = 10) => {
    const types = ['Fire', 'Water', 'Grass', 'Electric', 'Psychic'];
    const names = ['Charizard', 'Blastoise', 'Venusaur', 'Pikachu', 'Mewtwo'];

    return Array(perPage)
        .fill(null)
        .map((_, i) => ({
            id: (page - 1) * perPage + i + 1,
            name: `${names[i % names.length]} #${(page - 1) * perPage + i + 1}`,
            type: types[Math.floor(Math.random() * types.length)]
        }));
};

// Mock API call simulation
export const fetchPokemonPage = (page) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                results: generateMockPokemon(page),
                hasMore: page < 5 // Only 5 pages of data
            });
        }, 1000); // Simulate network delay
    });
};

