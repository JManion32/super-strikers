//import { useState } from 'react';
import '../../css/game.css';
// @ts-ignore
import { useNavigate } from 'react-router-dom';

function Game() {
    const navigate = useNavigate();

    function goHome() {
        navigate('/');
    }

    return (
        <>
            <h1>Game</h1>
            <button onClick={goHome}>Home</button>
        </>
    );
}

export default Game;
