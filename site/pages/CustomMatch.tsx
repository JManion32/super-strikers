import { useState } from 'react';
import '../css/custom-match.css';
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
    const [customCode, setCustomCode] = useState('');

    function goHome() {
        navigate('/');
    }

    return (
        <>
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
                            id="name-input"
                            className={`code-input`}
                            placeholder="Enter code"
                            title="Enter code"
                            value={customCode}
                            onChange={(e) => setCustomCode(e.target.value)}
                        />
                        <button className="join-btn">
                            Join
                        </button>
                    </div>
                    <hr className="content-spacer"/>
                    <div className="create-custom-container">
                        <h2>Create Custom Match</h2>
                        <p className="maps-desc">Choose a map to play on. If none are selected, it will be random.</p>
                        <div className="map-img-container">
                            <img src={neon_mode}/>
                            <img src={festive_mode}/>
                            <img src={forest_mode}/>
                            <img src={galaxy_mode}/>
                            <img src={halloween_mode}/>
                            <img src={monochrome_mode}/>
                            <img src={premium_mode}/>
                            <img src={retro_mode}/>
                            <img src={voltage_mode}/>
                            <img src={warm_mode}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CustomMatch;
