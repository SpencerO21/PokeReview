import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div className="body container-fluid">
            <header className="row py-3">
                <div className="col-12">
                    <h1 className="text-center">PokeReview</h1>
                    <h2 className="text-center"><a href="https://github.com/SpencerO21/PokeReview"
                                                   className="text-decoration-none">My startup repo</a></h2>
                    <nav className="mt-3">
                        <ul className="nav justify-content-center">
                            <li className="nav-item"><a className="nav-link" href="login.html">Login</a></li>
                            <li className="nav-item"><a className="nav-link"
                                                        href="../pokelist/pokelist.html">Pokemon</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <footer class="row mt-5">
                <div className="col-12 text-center">
                    <hr/>
                    <span class="text-muted">Spencer Olson</span>
                </div>
            </footer>
        </div>
    )
}