import Modal from './Modal.tsx';
import '../css/home.css';
import '../css/privacy-policy.css';

function PrivacyPolicy() {
    return (
        <>
            <Modal
                canOutsideClick={true}
                borderColor={'pink'}
                trigger={<a className="footer-link-pink">Privacy Policy</a>}
            >
                <div className="privacy-policy-container">
                    <h2>PRIVACY POLICY</h2>
                    <div className="privacy-policy-rule">
                        <h3>1. No Personal Information Collected</h3>
                        <p>
                            Super Strikers does not collect any personally identifiable information
                            (PII) such as your name, email address, or payment details.
                        </p>
                    </div>
                    <div className="privacy-policy-rule">
                        <h3>2. Cookies & Session Data</h3>
                        <p>
                            Temporary cookies or session data may be stored strictly for gameplay
                            functionality (e.g., authentication, token validation, and game state
                            tracking). This data is never used for analytics or marketing.
                        </p>
                    </div>
                    <div className="privacy-policy-rule">
                        <h3>3. Rate Limiting</h3>
                        <p>
                            We may temporarily process your IP address to prevent abuse and ensure
                            fair usage of our services. This information is not stored long-term and
                            is used solely for security-related functionality.
                        </p>
                    </div>
                    <div className="privacy-policy-rule">
                        <h3>4. No Third-Party Sharing</h3>
                        <p>
                            Super Strikers does not share, sell, or transfer any user data to third
                            parties. The game is intended solely for entertainment, learning, and
                            portfolio demonstration.
                        </p>
                    </div>
                    <div className="privacy-policy-rule">
                        <h3>5. Acceptance of Policy</h3>
                        <p>
                            By playing Super Strikers, you agree to the terms of this privacy
                            policy. If you have any concerns, please email{' '}
                            <a className="email-anchor" href="mailto:jman32business@gmail.com">
                                jman32business@gmail.com
                            </a>
                            .
                        </p>
                    </div>
                    <p className="last-updated">Last updated: 2025-12-25</p>
                </div>
            </Modal>
        </>
    );
}

export default PrivacyPolicy;
