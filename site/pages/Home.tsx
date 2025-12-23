import { useState } from 'react';

import '../css/home.css';
//import { checkName } from '../utils/checkName.ts'

function App() {
    const [nickname, setNickname] = useState('');

    return (
        <>
            <div className="home-page-container">
                <div className="home-content-container">
                    <h1 className="site-title">
                        <span className="site-title-1">Super</span>{' '}
                        <span className="site-title-2">Strikers</span>
                    </h1>
                    <p className="name-warning" id="name-warning">
                        Please choose a clean nickname!
                    </p>
                    <input
                        type="text"
                        maxLength={24}
                        className="name-input"
                        placeholder="Enter Nickname"
                        title="Enter your nickname"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />
                    <div className="start-btns-container">
                        <button className="start-btn gradient-border">
                            <span className="gradient-text">Find Match</span>
                        </button>
                        <button className="start-btn gradient-border">
                            <span className="gradient-text">Custom Match</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="home-footer-container">
                <a className="footer-link-cyan">What's New?</a>
                <span>|</span>
                <a className="footer-link-pink">Share</a>
                <span>|</span>
                <a
                    className="footer-link-cyan"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc8LkUPkPTEdItDLcJA9tmhBx_pZ7p8q2hN1V7VMeRarb5wbw/viewform?usp=dialog>Feature Request"
                    target="_blank"
                >
                    Feature Request
                </a>
                <span>|</span>
                <a className="footer-link-pink">Privacy Policy</a>
            </div>
        </>
    );
}

export default App;
