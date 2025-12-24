import { useState } from 'react';
import '../css/custom-match.css';
import Queue from '../components/Queue.tsx'
// @ts-ignore
import { useNavigate } from 'react-router-dom';

import festive_mode from '../assets/festive_mode.png';
import forest_mode from '../assets/forest_mode.png';
import galaxy_mode from '../assets/galaxy_mode.png';
import halloween_mode from '../assets/halloween_mode.png';
import monochrome_mode from '../assets/monochrome_mode.png';
import neon_mode from '../assets/neon_mode.png';
import premium_mode from '../assets/premium_mode.png';
import retro_mode from '../assets/retro_mode.png';
import voltage_mode from '../assets/voltage_mode.png';
import warm_mode from '../assets/warm_mode.png';

function CustomMatch() {
    const navigate = useNavigate();
    const [joinCode, setJoinCode] = useState('');
    const [createCode, setCreateCode] = useState('');
    const [selectedMap, setSelectedMap] = useState('Random');

    const [isJoining, setIsJoining] = useState(false);
    const [isCreating, setIsCreating] = useState(false);

    const maps = [
        { name: "Neon", img: neon_mode },
        { name: "Festive", img: festive_mode },
        { name: "Forest", img: forest_mode },
        { name: "Galaxy", img: galaxy_mode },
        { name: "Halloween", img: halloween_mode },
        { name: "Monochrome", img: monochrome_mode },
        { name: "Gilded", img: premium_mode },
        { name: "Retro", img: retro_mode },
        { name: "Voltage", img: voltage_mode },
        { name: "Warm", img: warm_mode },
    ];

    function selectMap(mapName: string) {
        setSelectedMap(prev => (prev === mapName ? "Random" : mapName));
    }

    function goHome() {
        navigate('/');
    }

    return (
        <>
            {(isJoining || isCreating) && <Queue />}
            <button className="home-btn" onClick={goHome}>⬅ Home</button>
            <div className="custom-match-page-container">
                <div className="custom-match-content-container">
                    <h1 className="custom-title">
                        <span className="custom-title-1">Custom</span>{' '}
                        <span className="custom-title-2">Match</span>
                    </h1>
                    <hr className="content-spacer"/>
                    <div className="join-custom-container">
                        <p className="join-custom-p">
                            Join Custom Match:
                        </p>
                        <input
                            type="text"
                            maxLength={6}
                            autoComplete="off"
                            className={`code-input`}
                            placeholder="Enter code"
                            title="Enter code"
                            value={joinCode}
                            onChange={(e) => setJoinCode(e.target.value)}
                        />
                        <button className="join-btn gradient-btn" onClick={ ()=> setIsJoining(!isJoining)}>
                            <span>{isJoining ? "Cancel" : "Join"}</span>
                        </button>
                    </div>
                    <hr className="content-spacer"/>
                    <div className="create-custom-container">
                        <h2>Create Custom Match</h2>
                        <p className="maps-desc">Choose a map to play on. If none are selected, it will be random.</p>
                        <div className="map-img-container">
                            {maps.map(({ name, img }) => (
                                <img
                                key={name}
                                src={img}
                                alt={`${name} map`}
                                className={selectedMap === name ? "map-selected" : ""}
                                onClick={() => selectMap(name)}
                                />
                            ))}
                        </div>
                        <div className="create-match-container">
                            <div className="selected-map-container">
                                <p className="selected-map-p">
                                    Selected Map:
                                </p>
                                <input
                                    type="text"
                                    maxLength={6}
                                    autoComplete="off"
                                    id="name-input"
                                    className="selected-map-display"
                                    value={selectedMap}
                                />
                            </div>
                            <button className="create-match-btn gradient-btn"  onClick={ ()=> setIsCreating(!isCreating)}>
                                <span>{isCreating ? "Cancel" : "Create"}</span>
                            </button>
                            <input
                                type="text"
                                maxLength={6}
                                autoComplete="off"
                                id="name-input"
                                className="match-code-display"
                                value={createCode}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CustomMatch;
