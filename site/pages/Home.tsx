import '../css/home.css'

function App() {

  return (
    <>
        <div className="home-page-container">
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
                <button className="start-btn">
                    Find Match
                </button>
                <button className="start-btn">
                    Custom Match
                </button>
            </div>
        </div>
        <div>
            <p>Hi</p>
        </div>
    </>
  )
}

export default App
