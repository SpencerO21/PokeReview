import React from 'react';
import {PokeList} from "../pokelist/pokeList";

export function Authenticated(props) {

    return (
        <>
            <PokeList {...props} />
        </>
    );
}
