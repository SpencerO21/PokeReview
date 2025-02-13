import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { PokeList} from "./pokelist/pokeList";
import { PokeDetail } from "./pokedetail/pokeDetail";

export default function App() {
    return (
        <BrowserRouter>
            <div className="body container-fluid">
                <header className="row py-3">
                    <div className="col-12">
                        <h1 className="text-center">PokeReview</h1>
                        <h2 className="text-center"><a href="https://github.com/SpencerO21/PokeReview"
                                                       className="text-decoration-none">Spencer Olson's startup repo</a></h2>
                        <nav className="mt-3">
                            <ul className="nav justify-content-center">
                                <li className="nav-item"><NavLink className="nav-link" to="">Login</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link"
                                                                  to="pokelist">Pokemon</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="pokedetail">PokeDetail</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <Routes>
                    <Route path='/' element={<Login />} exact />
                    <Route path='/pokedetail' element={<PokeDetail />} />
                    <Route path='/pokelist' element={<PokeList />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <footer className="row mt-5">
                    <div className="col-12 text-center">
                        <hr/>
                        <span className="text-muted">Spencer Olson</span>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    )
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}