import React, {useEffect, useState} from "react";
import './pokeDetail.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from "react-router-dom";
import {commentApi, fetchPokemonById} from "./pokeDetailData";

export function PokeDetail() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [isLoadingComments, setIsLoadingComments] = useState(false);

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

    useEffect(() => {
        const loadComments = async () => {
            setIsLoadingComments(true);
            try {
                const comments = await commentApi.getComments(id);
                setComments(comments);
            } finally {
                setIsLoadingComments(false);
            }
        };
        loadComments();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!newComment.trim()) return;

        // Post new comment
        await commentApi.postComment({
            pokemonId: id,
            author: "User", // Hardcoded for mock
            text: newComment
        });

        // Refresh comments
        const updatedComments = await commentApi.getComments(id);
        setComments(updatedComments);
        setNewComment('');
    }

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
                <form onSubmit={handleSubmit} className="mb-4">
                    <div className="form-group">
                    <textarea
                        className="form-control comment-textbox"
                        rows="5"
                        placeholder="Enter your comment:"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        {isLoadingComments ? 'Posting...' : 'Post Comment'}
                    </button>
                </form>

                <h2 className="mb-3">Comments</h2>
                {isLoadingComments ? (
                    <p>Loading comments...</p>
                ) : (
                    comments.map(comment => (
                        <article key={comment.id} className="comment-card mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="username">@{comment.author}</h3>
                                <small className="text-muted">
                                    {new Date(comment.timestamp).toLocaleDateString()}
                                </small>
                            </div>
                            <p className="comment-text mt-2">{comment.text}</p>
                        </article>
                    ))
                )}
            </div>
        </main>
    );
}