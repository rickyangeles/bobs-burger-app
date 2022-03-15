import React, { useEffect, useState, useMemo, useContext } from 'react';
import './App.css';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppContext} from './AppContext';
//Components
import CharacterList from './Components/CharacterList';
import CharacterProfile from './Components/CharacterProfile';
import Header from './Components/Header';

//Data
import {characterList} from './Data/characters';


function App() {

    const context = useContext(AppContext)

    const [characters,          setCharacters] = useState([]);
    const [selectedCharacter,   setSelectedCharacter] = useState([]);
    const [characterRelatives,  setCharacterRelatives] = useState([]);
    const [character, setCharacter] = useState([]);

    const initialValue = {
        character,          setCharacter,
        characters,          setCharacters,
        selectedCharacter,   setSelectedCharacter,
        characterRelatives,  setCharacterRelatives
    }

    const characterOptions = [] = characterList.map((character)=>({value: character.id, label: character.name, gender: character.gender, hairColor: character.hairColor }));

    useEffect(() => {
        setCharacters(characterOptions);
        
    },[]);
    console.log(characterOptions);

    return (
        <AppContext.Provider value={initialValue}>
            <div className="App">
                <Header />
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs={12} lg={8} md={8} >
                            <CharacterList characters={characters} />
                            <CharacterProfile id={selectedCharacter} />
                        </Col>

                    </Row>
                </Container>
            </div>
        </AppContext.Provider>
    );
}

export default App;
