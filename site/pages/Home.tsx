import { useState } from 'react';
// @ts-ignore
import { useNavigate } from 'react-router-dom';

import '../css/home.css';
import Queue from '../components/Queue.tsx'
import { badName } from '../utils/checkName.ts'

function Home() {
    const navigate = useNavigate();

    const [nickname, setNickname] = useState('');
    const [isQueueing, setIsQueueing] = useState(false);
    const [isBadName, setIsBadName] = useState(false);
    const [canCustomMatch, setCanCustomMatch] = useState(true);

    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("https://superstrikers.io");
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    function start(type: string) {
        if (badName(nickname)) {
            setNickname("");
            setCanCustomMatch(true);
            setIsBadName(true);
            return;
        }
        setIsBadName(false);
        if (type === "online-queue") {
            setCanCustomMatch(false);
            setIsQueueing(true);
        }
        else if (type === "online-cancel") {
            setCanCustomMatch(true);
            setIsQueueing(false);
        }
        else if (type === "custom") {
            navigate("/CustomMatch");
        }
    }

    return (
        <>
            <div className="home-page-container">
                {isQueueing && <Queue />}
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
                        autoComplete="off"
                        id="name-input"
                        className={`name-input ${isQueueing ? "input-disabled" : ""}`}
                        placeholder="Enter Username"
                        title="Enter your username"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />
                    <div className="start-btns-container">
                        <button
                            className={`start-btn gradient-border ${nickname == "" ? "btn-disabled" : ""} ${isQueueing ? "cancel" : ""}`}
                            id="find-match-btn"
                            onClick={() => {isQueueing ? start("online-cancel") : start("online-queue")}}>
                            <span className="gradient-text">{isQueueing ? "Cancel" : "Find Match"}</span>
                        </button>
                        <button className={`start-btn gradient-border ${!canCustomMatch || nickname == "" ? "btn-disabled" : ""}`} onClick={() => start("custom")}>
                            <span className="gradient-text" id="custom-match-btn">Custom Match</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="home-footer-container">
                <a className="footer-link-cyan">What's New?</a>
                <span>|</span>
                <a className="footer-link-pink" onClick={handleCopy}>
                    {copied ? "Copied!" : "Share"}
                </a>
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
