import Modal from './Modal.tsx'
import '../css/home.css';
import '../css/about.css';

function About() {

    return (
    <>
        <Modal
            canOutsideClick={true}
            borderColor={"pink"}
            trigger={<a className="footer-link-pink">About</a>}
        >
            <div className="about-container">
                <h2>About</h2>
                <div className="about-qa">
                    <h3>What is Super Strikers?</h3>
                    <p>
                        Super Strikers is a 2D, fast-paced, multiplayer browser game that combines soccer and air hockey. 
                        Play against real opponents, outscoring them to win!
                    </p>
                </div>
                <div className="about-qa">
                    <h3>What are the rules?</h3>
                    <p>
                        <ul>
                            <li><b>Objective:</b> outscore your opponent.</li>
                            <li>Each game lasts 2 minutes.</li>
                            <li>If the result is inconclusive, play a sudden death overtime.</li>
                        </ul>
                    </p>
                </div>
                <div className="about-qa">
                    <h3>How can I play?</h3>
                    <p>
                        There are 2 modes: <b>online</b> and <b>custom</b>. Click <i>Find Match</i> to join the queue of other players searching for 
                        matches. Click <i>Custom Match</i> to create or join a private game with a friend.
                    </p>
                    <p>
                        The game is simple to play, only requiring 1 hand. Use WASD to move, SHIFT to boost, and SPACE to dash.
                    </p>
                </div>
                <a
                    className="github-btn"
                    href="https://github.com/JManion32/super-strikers"
                    target="_blank"
                >
                    GitHub
                </a>
            </div>
        </Modal>
    </>
  );
}

export default About;
