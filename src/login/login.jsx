import React from 'react';
import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export function Login() {
    return (
        <main className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
                <h2 className="text-center mb-4 mt-5">Login/Register</h2>
                <form method="get" action="../pokelist/pokelist.html">
                    <div className="input-group mb-3">
                        <span className="input-group-text">@</span>
                        <input type="email" className="form-control" placeholder="your@email.com" required/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
                        <input type="password" className="form-control" placeholder="password" required/>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">Login</button>
                        <button type="button" className="btn btn-secondary">Create Account</button>
                    </div>
                </form>
            </div>
        </main>
    );
}