import React, { useEffect, useState, useMemo, useContext } from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppContext} from '../AppContext';
import CharacterRelated from './CharacterRelated';
import ReactDOM from 'react-dom'
import SignatureCanvas from 'react-signature-canvas'

import logo from './bobs-burger-logo.png'; 
import burger from './burger-icon.png';




function CharacterProfile() {
    const context = useContext(AppContext);
    const {character,          setCharacter,
        selectedCharacter,   setSelectedCharacter,
        characterRelatives,  setCharacterRelatives
    } = context;


    const characterURL = 'https://bobsburgers-api.herokuapp.com/characters/' + selectedCharacter.value;   
    console.log(characterURL); 
    useEffect(() => { 
        fetch(characterURL)
          .then(res => res.json())
          .then((result) => {setCharacter(result)},
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {

            }
          )
      }, [selectedCharacter])

    
    return (

        <>

            <Container fluid className="character-card">
                <Row>
                    <img src={logo} className="character-logo" />
                    <div className="character-image-wrap">
                        <img className="character-image" src={character.image} />
                        {/* <ul>
                            <li>Age: {character.age ? character.age : 'N/A'}</li>
                            <li>Gender: {character.gender ? character.gender : 'N/A'}</li>
                            <li>Hair Color: {character.hairColor ? character.hairColor : 'N/A'}</li>
                            <li><CharacterRelated /></li>
                        </ul> */}
                        <img src={burger} className="burger-icon" />
                    </div>
                    <h2 className="character-name">{character.name}</h2>
                </Row>
            </Container>
        </>
    );
}


export default CharacterProfile;