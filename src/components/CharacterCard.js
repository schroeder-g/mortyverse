import React from 'react'; 
import axios from 'axios'; 
import styled from 'styled-components'

// Establishing a character component to render a div container for each character in the Mortyverse

function CharacterCard() {

    return (
        <div>
            <h3>Character Name</h3>
            <img src='' alt='' />
            <h4>Status: </h4>
            <p>Species: </p>
            <p>Origin: </p>
            <p>Episodes: </p>
            <button>Full Archive</button>
            <ul>
                <li>List of episodes character appears in</li>
            </ul>
        </div>
    )
}

export default CharacterCard;