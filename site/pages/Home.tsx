import { useState } from 'react';
// @ts-ignore
import { useNavigate } from 'react-router-dom';

import '../css/home.css';
import { badName } from '../utils/checkName.ts'

function Home() {
    const navigate = useNavigate();

    const [nickname, setNickname] = useState('');
    const [isBadName, setIsBadName] = useState(false);
    const [canCustomMatch, setCanCustomMatch] = useState(true);


    function start(type: string) {
        if (badName(nickname)) {
            setNickname("");
            setCanCustomMatch(true);
            setIsBadName(true);
            return;
        }
        setIsBadName(false);
        if (type === "online") {
            setCanCustomMatch(false);
        }
        else if (type === "custom") {
            navigate("/CustomMatch");
        }
    }

    return (
        <>
            <div className="home-page-container">
                <div className="home-content-container">
                    <h1 className="site-title">
                        <span className="site-title-1">Super</span>{' '}
                        <span className="site-title-2">Strikers</span>
                    </h1>
                    <p className={`name-error ${isBadName ? "" : "hide-error"}`}>
                        Please choose a clean username!
                    </p>
                    <input
                        type="text"
                        maxLength={24}
                        id="name-input"
                        className="name-input"
                        placeholder="Enter Username"
                        title="Enter your username"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />
                    <div className="start-btns-container">
                        <button className={`start-btn gradient-border ${nickname == "" ? "btn-disabled" : ""}`} id="find-match-btn" onClick={() => start("online")}>
                            <span className="gradient-text">Find Match</span>
                        </button>
                        <button className={`start-btn gradient-border ${!canCustomMatch || nickname == "" ? "btn-disabled" : ""}`}>
                            <span className="gradient-text" id="custom-match-btn" onClick={() => start("custom")}>Custom Match</span>
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

export default Home;
