import React from "react";
import './pokeDetail.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export function PokeDetail() {
    return (
        <main className="container">
            <div className="row">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <article className="card">
                            <img src="/Poké_Ball_icon.svg.png" className="card-img-top" alt="a pokemon"/>
                            <div className="card-content">
                                <h2>Bulbasaur</h2>
                                <p>Grass pokemon</p>
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