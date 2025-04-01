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
    const username = location.state || '';

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
            author: username,
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
            <div className="row justify-content-center py-4">
                <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                    <article className="card shadow-lg border-0 mb-4">
                        <img
                            src={pokemon.sprite || "/Poké_Ball_icon.svg.png"}
                            className="card-img-top p-4 bg-light"
                            alt={pokemon.name}
                            style={{height: '300px', objectFit: 'contain'}}
                            onError={(e) => {
                                e.target.src = "/Poké_Ball_icon.svg.png";
                            }}
                        />

                        <div className="card-body">
                            <h1 className="card-title display-5 text-center mb-2">
                                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                            </h1>
                            <div className="d-flex justify-content-center mb-4">
                                <div className="badge bg-primary fs-5">
                                    {pokemon.types.join(' / ').toUpperCase()}
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="h5 mb-3">Base Stats</h3>
                                <div className="list-group">
                                    {pokemon.stats.map(stat => (
                                        <div
                                            key={stat.name}
                                            className="list-group-item d-flex justify-content-between align-items-center bg-light"
                                        >
                                            <span className="text-capitalize">
                                                {stat.name.replace('-', ' ')}
                                            </span>
                                            <span className="badge bg-primary rounded-pill">
                                                {stat.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </article>
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
    )
        ;
}