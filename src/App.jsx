import './App.scss'
import { ArrowIcon } from './components/images/arrow-icon'
import { Logo } from './components/images/logo'

function App() {

  return (
    <main>
      <header className="header-container">
        <Logo />
        <nav className="menu-options">
          <a>What we offer</a>
          <a>How it works</a>
          <a>Portfolio</a>
        </nav>
        <button>
          Contact us
        </button>
      </header>
      <div className="content-container">
        <h1>Lets grow your social presence</h1>
        <div className="bubble target">
          🎯
        </div>
        <div className="bubble shop">
          🛍️
        </div>
        <div className="bubble rocket">
          🚀
        </div>
        <div className="bubble fire">
          🔥
        </div>
      </div>
    </main>
  )
}

export default App
