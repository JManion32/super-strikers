import '../css/home.css'

function App() {

  return (
    <>
        <div className="home-page-container">
            <h1 className="site-title"><span>Super</span> <span>Strikers</span></h1>
            <p
                className=""
                id="profanity-error"
            >
                Please choose a clean nickname!
            </p>
            <input
                type="text"
                id="nickname-enter-form"
                data-cy="nickname-enter-form"
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
                maxLength={20}
                className=""
                placeholder="Enter Nickname"
                title="Enter your nickname"
            />
            <button>
                Find Match
            </button>
            <button>
                Custom Match
            </button>
        </div>
    </>
  )
}

export default App
