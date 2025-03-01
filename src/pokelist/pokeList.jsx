import React from "react";
import './pokelist.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";

export function PokeList(props) {


    function logout() {
        localStorage.removeItem('userName');
        props.onLogout();
    }

    return (
        <main>
            <Button variant='secondary' onClick={() => logout()}>
                Logout
            </Button>
            <div className="card-container">
                <article className="card mt-3">
                    <img src="/Poké_Ball_icon.svg.png" alt="a pokemon"/>
                    <div className="card-content">
                        <p>Electric pokemon</p>
                    </div>
                </article>
                <article className="card mt-3">
                    <img src="/Poké_Ball_icon.svg.png" alt="a pokemon"/>
                    <div className="card-content">
                        <h2>Charmander</h2>
                        <p>fire pokemon</p>
                    </div>
                </article>
                <article className="card mt-3">
                    <img src="/Poké_Ball_icon.svg.png" alt="a pokemon"/>
                    <div className="card-content">
                        <h2>Squirtle</h2>
                        <p>water pokemon</p>
                    </div>
                </article>
                <article className="card mt-3">
                    <img src="/Poké_Ball_icon.svg.png" alt="a pokemon"/>
                    <div className="card-content">
                        <h2>Bulbasaur</h2>
                        <p>Grass pokemon</p>
                    </div>
                </article>
            </div>

        </main>
    );
}