import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { PokeList} from "./pokelist/pokeList";
import { PokeDetail } from "./pokedetail/pokeDetail";
import {AuthState} from "./login/authState";

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

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
                                {authState === AuthState.Authenticated && (
                                <li className="nav-item"><NavLink className="nav-link"
                                                                  to="pokelist">Pokemon</NavLink></li> )}

                            </ul>
                        </nav>
                    </div>
                </header>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <Login
                                userName={userName}
                                authState={authState}
                                onAuthChange={(userName, authState) => {
                                    setAuthState(authState);
                                    setUserName(userName);
                                }}
                            />
                        }
                        exact
                    />
                    <Route path='/pokedetail/:id' element={<PokeDetail />} />
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