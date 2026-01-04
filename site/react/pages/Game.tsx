//import { useState } from 'react';
import '../../css/game.css';
import MatchFinished from '../modals/MatchFinished.tsx';
// @ts-ignore
import { useNavigate } from 'react-router-dom';

function Game() {
    const navigate = useNavigate();

    function goHome() {
        navigate('/');
    }

    return (
        <>
            <button className="temp-btn" onClick={goHome}>Temp: Home</button>
            <MatchFinished />
            <div className="game-container">
                <div className="scoreboard-container">
                    <div className="score-1">
                        0
                    </div>
                    <div className="game-time">
                        OVERTIME
                    </div>
                    <div className="score-2">
                        0
                    </div>
                </div>
                <canvas className="game-canvas">

                </canvas>
                <div className="boost-meter">

                </div>
            </div>
        </>
    );
}

export default Game;
