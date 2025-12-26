import { useEffect, useState } from 'react';
// @ts-ignore
import { useNavigate } from 'react-router-dom';

import '../../css/home.css';
import About from '../modals/About.tsx';
// @ts-ignore idk why this is necessary
import WhatsNew from '../modals/WhatsNew.tsx';
import PrivacyPolicy from '../modals/PrivacyPolicy.tsx';
import Queue from '../components/Queue.tsx';
import { badName } from '../../utils/checkName.ts';

function Home() {
    const navigate = useNavigate();

    const [isQueueing, setIsQueueing] = useState(false);
    const [isBadName, setIsBadName] = useState(false);
    const [canCustomMatch, setCanCustomMatch] = useState(true);

    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('https://superstrikers.io');
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    const [name, setName] = useState(() => {
        return localStorage.getItem('savedName') ?? '';
    });

    useEffect(() => {
        localStorage.setItem('savedName', name);
    }, [name]);

    function start(type: string) {
        if (badName(name)) {
            setName('');
            setCanCustomMatch(true);
            setIsBadName(true);
            return;
        }
        setIsBadName(false);
        if (type === 'online-queue') {
            setCanCustomMatch(false);
            setIsQueueing(true);
        } else if (type === 'online-cancel') {
            localStorage.setItem('savedName', name);
            setCanCustomMatch(true);
            setIsQueueing(false);
        } else if (type === 'custom') {
            localStorage.setItem('savedName', name);
            navigate('/CustomMatch');
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
                    <p className={`name-error ${isBadName ? '' : 'hide-error'}`}>
                        Please choose a clean username!
                    </p>
                    <input
                        type="text"
                        maxLength={24}
                        autoComplete="off"
                        id="name-input"
                        className={`name-input ${isQueueing ? 'input-disabled' : ''}`}
                        placeholder="Enter Username"
                        title="Enter your username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div className="start-btns-container">
                        <button
                            className={`start-btn gradient-btn ${name == '' ? 'gradient-btn-disabled' : ''} ${isQueueing ? 'cancel' : ''}`}
                            id="find-match-btn"
                            onClick={() => {
                                isQueueing ? start('online-cancel') : start('online-queue');
                            }}
                        >
                            <span>{isQueueing ? 'Cancel' : 'Find Match'}</span>
                        </button>
                        <button
                            className={`start-btn gradient-btn ${!canCustomMatch || name == '' ? 'gradient-btn-disabled' : ''}`}
                            onClick={() => start('custom')}
                        >
                            <span>Custom Match</span>
                        </button>
                    </div>
                </div>
                <div className="home-footer-container">
                    <About />
                    <span>|</span>
                    <WhatsNew />
                    <span>|</span>
                    <a className="footer-link-pink" onClick={handleCopy}>
                        {copied ? 'Copied!' : 'Share'}
                    </a>
                    <span>|</span>
                    <a
                        className="footer-link-cyan"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSc8LkUPkPTEdItDLcJA9tmhBx_pZ7p8q2hN1V7VMeRarb5wbw/viewform?usp=dialog>Feature Request"
                        target="_blank"
                    >
                        Feature Request ↗
                    </a>
                    <span>|</span>
                    <PrivacyPolicy />
                </div>
            </div>
        </>
    );
}

export default Home;
