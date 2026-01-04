import { useState } from 'react';
import Modal from '../components/Modal.tsx';
import '../../css/match-finished.css';
import { useNavigate } from 'react-router-dom';
import Queue from '../components/Queue.tsx';

function MatchFinished() {

    const navigate = useNavigate();
    const [isRematching, setIsRematching] = useState(false);

    function goHome() {
        navigate('/');
    }
    return (
        <>
            {isRematching && <Queue />}
            <Modal
                canOutsideClick={false}
                borderColor={'pink'}
                trigger={<button className="temp-btn">Temp: Match Finished</button>}
            >
                <div className="match-finished-container">
                    <h1 className="match-finished-header">MATCH FINISHED!</h1>
                    <div className="final-score-container">
                        <div className="final-score-1">
                            <h2>2</h2>
                        </div>
                        <div className="score-dash">
                            -
                        </div>
                        <div className="final-score-2">
                            <h2>2</h2>
                        </div>
                    </div>
                    <div className="final-name-container">
                        <div className="final-name-1">
                            <h2>Username1234</h2>
                        </div>
                        <div className="final-name-spacer"></div>
                        <div className="final-name-2">
                            <h2>Username5678</h2>
                        </div>
                    </div>
                    <div className="continue-btns-container">
                        <button
                            className="rematch-btn"
                            onClick={() => setIsRematching(!isRematching)}
                        >
                            <span>{isRematching ? 'Cancel' : 'Rematch!'}</span>
                        </button>
                        <button
                            className={`continue-home-btn ${isRematching ? 'disabled' : ''}`}
                            onClick={goHome}
                        >
                            ⬅ Home
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default MatchFinished;
