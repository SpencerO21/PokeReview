import React, {useEffect, useState} from "react";
import './pokeDetail.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from "react-router-dom";
import {fetchPokemonById} from "./pokeDetailData";

export function PokeDetail() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadPokemon = async () => {
            setIsLoading(true);
            try {
                const data = await fetchPokemonById(id);
                setPokemon(data);
            } catch (error) {
                console.error('Error loading Pokémon:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadPokemon();
    }, [id]);

    if (isLoading) {
        return (
            <main className="container text-center mt-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p>Loading Pokémon data...</p>
            </main>
        );
    }
    return (
        <main className="container">
            <div className="row">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <article className="card">
                            <img src="/Poké_Ball_icon.svg.png"
                                 className="card-img-top"
                                 alt={pokemon.name}/>
                            <div className="card-content">
                                <h2>{pokemon.name}</h2>
                                <p className="text-capitalize">{pokemon.type} Pokémon</p>
                                <div className="stats mt-3">
                                    <p>Height: {pokemon.height} cm</p>
                                    <p>Weight: {pokemon.weight} kg</p>
                                </div>
                                <p className="fst-italic mt-2">{pokemon.description}</p>
                            </div>
                        </article>
                    </div>
                </div>
                    <form method="post" action="pokeDetail.html" className="mb-4">
                        <div className="form-group">
                        <textarea className="form-control comment-textbox" rows="5"
                                  placeholder="Enter your comment:"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Post</button>
                    </form>
                    <h2 className="mb-3">Comments</h2>
                    <article className="comment-card">
                        <h3 className="username">@Person</h3>
                        <p className="comment">This is a cool pokemon</p>
                    </article>
                </div>
        </main>
);
}