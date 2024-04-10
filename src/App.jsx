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
    </main>
  )
}

export default App
