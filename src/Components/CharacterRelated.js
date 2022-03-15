import React, { useEffect, useState, useMemo, useContext } from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppContext} from '../AppContext';


function CharacterRelated() {

    const context = useContext(AppContext);
    const {
        characterRelatives,  setCharacterRelatives
    } = context;
    return null;

}


export default CharacterRelated;