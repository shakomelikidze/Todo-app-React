import { useState } from 'react'
import './App.css'

function App() {
  const [dark, setDark] = useState('mtvare');
  const toggleDarkMode = () => {
    setDark(dark === 'mtvare' ? 'mze' : 'mtvare')
  }
  const bodyBackgroundColor = {
    backgroundColor: dark === 'mze' ? '#171823' : '#FAFAFA'
  }
  const inputBackgroundColor = {
    backgroundColor : dark === 'mze' ? '#25273D' :  '#FFF',
    boxShadow : dark === 'mze' 
    ? '0px 35px 50px -15px rgba(0, 0, 0, 0.50)'
    : '0px 35px 50px -15px rgba(194, 195, 214, 0.50)'
  }

  const footerColor = {
    color : dark === 'mze' ? '#5B5E7E' : '#9495A5'
  }

  return (
    <>
      <div style={bodyBackgroundColor} className='main' >
        <header>
          <h1 className='logo'>TODO</h1>
          <button onClick={toggleDarkMode}>{dark}</button>
        </header>
        <section>
          <input style={inputBackgroundColor} className='input' type="text" />
        </section>
        <footer>
          <p style={footerColor} className='footer-text'>
            Drag and drop to reorder list
          </p>
        </footer>
      </div>
    </>
  )
}

export default App
