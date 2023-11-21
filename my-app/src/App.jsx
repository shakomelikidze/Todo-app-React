import { useState } from 'react'
import './App.css'
import dayImage from './images/assets/bg-desktop-dark.jpg';
import darkImage from './images/assets/bg-desktop-light.jpg';
import moonIcon from './images/assets/icon-moon.svg';
import sunIcon from './images/assets/icon-sun.svg';
import circle from './images/assets/circle.svg';

function App() {
  const [dark, setDark] = useState('mtvare');
  const toggleDarkMode = () => {
    setDark(dark === 'mtvare' ? 'mze' : 'mtvare')
  }
  const bodyBackgroundColor = {
    backgroundColor: dark === 'mze' ? '#171823' : '#FAFAFA'
  }
  const getBackgroundImage = {
    backgroundImage: dark === 'mze' ? `url(${dayImage})` : `url(${darkImage})`
  };
  const inputBackgroundColor = {
    backgroundColor : dark === 'mze' ? '#25273D' :  '#FFF',
    boxShadow : dark === 'mze' 
    ? '0px 35px 50px -15px rgba(0, 0, 0, 0.50)'
    : '0px 35px 50px -15px rgba(194, 195, 214, 0.50)'
  }
  const taskBackgroundColor = {
    backgroundColor : dark === 'mze' ? '#25273D' :  '#FFF'
  }
  const footerColor = {
    color : dark === 'mze' ? '#5B5E7E' : '#9495A5'
  }

  return (
    <>
      <div style={bodyBackgroundColor} className='main' >
        <div style={getBackgroundImage} className='background-iamge'></div>
        <header>
          <h1 className='logo'>TODO</h1>
          <button className='dark-mode-btn' onClick={toggleDarkMode}>
            <img src={dark === 'mtvare' ? moonIcon : sunIcon} alt='dark mode toggle'/>
          </button>
        </header>
        <section>
          <img className='circle' src={circle} alt="circle" />
          <div className="input-div">
            <input 
            style={inputBackgroundColor} 
            className='input' 
            type="text"
            placeholder='Create a new todo…'
            />
          </div>
          <div className="tasks-div">
            <div className="todo"></div>
            <div className="todo"></div>
            <div className="todo"></div>
            <div className="todo"></div>
            <div style={taskBackgroundColor} className="tasks-footer">
              <p className='tasks-footer-p'>5 items left</p>
              <div className="filter">
                <p className='tasks-footer-p'>All</p>
                <p className='tasks-footer-p'>Active</p>
                <p className='tasks-footer-p'>Completed</p>
              </div>
              <p className='tasks-footer-p'>Clear Completed</p>
            </div>
          </div>
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
