import React, { useEffect, useState, useMemo, useContext } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppContext} from '../AppContext';

import Select from 'react-select';

function CharacterList() {
    const context = useContext(AppContext);
    const {
        character, setCharacter, 
        characters,          setCharacters,
        selectedCharacter, setSelectedCharacter
    } = context;
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedCharacter) => {
        setSelectedCharacter(selectedCharacter);
    };
    


    return (
        <div className="App"><h2>Select Character</h2>
            <Select
            defaultValue={selectedOption}
            onChange={handleChange}
            options={characters}
            value={selectedCharacter.name}
            />
        </div>
    );
}


export default CharacterList;