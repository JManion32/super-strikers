import '../css/home.css'

function App() {

  return (
    <>
        <div className="home-page-container">
            <div className="home-content-container">
                <h1 className="site-title"><span className="site-title-1">Super</span> <span className="site-title-2">Strikers</span></h1>
                <p
                    className="name-warning"
                >
                    Please choose a clean nickname!
                </p>
                <input
                    type="text"
                    maxLength={24}
                    className="name-input"
                    placeholder="Enter Nickname"
                    title="Enter your nickname"
                    /*
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && nickname) {
                            e.preventDefault();
                            startGame();
                        }
                    }}
                    */
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
            <a className="footer-link-cyan">Feature Request</a>
            <span>|</span>
            <a className="footer-link-pink">Privacy Policy</a>
        </div>
    </>
  )
}

export default App
