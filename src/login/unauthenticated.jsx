import React from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() {
        loginOrCreate(`/api/auth/create`);
    }

    async function createUser() {
        loginOrCreate(`/api/auth/create`);
    }

    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({ email: userName, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            localStorage.setItem('userName', userName);
            props.onLogin(userName);
        } else {
            const body = await response.json();
            setDisplayError(`⚠ Error: ${body.msg}`);
        }
    }

    return (
        <>
            <main className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <h2 className="text-center mb-4 mt-5">Login/Register</h2>
                    <form method="get" action="../pokelist/pokelist.html">
                        <div className="input-group mb-3">
                            <span className="input-group-text">@</span>
                            <input className='form-control' type='text' value={userName}
                                   onChange={(e) => setUserName(e.target.value)} placeholder='your@email.com'/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
                            <input className='form-control' type='password'
                                   onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
                        </div>
                        <div className="d-grid gap-2">
                            <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
                                Login
                            </Button>
                            <Button variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
                                Create
                            </Button>
                        </div>
                    </form>
                </div>
            </main>

            <MessageDialog message={displayError} onHide={() => setDisplayError(null)}/>
        </>
    );
}