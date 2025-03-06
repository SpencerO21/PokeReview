import React, {useEffect, useState} from "react";
import './pokelist.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import {fetchPokemonPage} from "./pokeListData";
import InfiniteScroll from "react-infinite-scroll-component";


export function PokeList(props) {
    const [pokemonData, setPokemonData] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const loadMoreData = async () => {
        const response = await fetchPokemonPage(page);
        setPokemonData(prev => [...prev, ...response.results]);
        setHasMore(response.hasMore);
        setPage(prev => prev + 1);
    };

    useEffect(() => {
        loadMoreData();
    }, []); // Initial load

    function logout() {
        localStorage.removeItem('userName');
        props.onLogout();
    }

    return (
        <main>
            <Button variant='secondary' onClick={logout}>
                Logout
            </Button>

            <InfiniteScroll
                dataLength={pokemonData.length}
                next={loadMoreData}
                hasMore={hasMore}
                loader={<h4 className="text-center mt-3">Loading more Pokémon...</h4>}
                endMessage={
                    <p className="text-center mt-3">
                        <b>You've caught all 50 Pokémon! 🎉</b>
                    </p>
                }
            >
                <div className="card-container">
                    {pokemonData.map((pokemon) => (
                        <article key={pokemon.id} className="card mt-3">
                            <img src="/Poké_Ball_icon.svg.png" alt={pokemon.name} />
                            <div className="card-content">
                                <h2>{pokemon.name}</h2>
                                <p>{pokemon.type} Pokémon</p>
                            </div>
                        </article>
                    ))}
                </div>
            </InfiniteScroll>
        </main>
    );
}