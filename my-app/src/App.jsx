import { useState } from 'react';
import './App.css';
import dayImage from './images/assets/bg-desktop-dark.jpg';
import darkImage from './images/assets/bg-desktop-light.jpg';
import moonIcon from './images/assets/icon-moon.svg';
import sunIcon from './images/assets/icon-sun.svg';
import circle from './images/assets/circle.svg';
import cross from './images/assets/icon-cross.svg';

function App() {
  const [dark, setDark] = useState('mtvare');
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }
  const handleEnterPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue.trim(), completed: false }]);
      setInputValue('')
    }
  };
  const toggleDarkMode = () => {
    setDark(dark === 'mtvare' ? 'mze' : 'mtvare')
  }
  const toggleTodoCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };
  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
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
  const lineBackgroundColor = {
    backgroundColor : dark === 'mze' ? '#393A4B' : '#E3E4F1'
  }
  const todoTextColor = {
    color : dark === 'mze' ? '#C8CBE7' : '#494C6B'
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
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleEnterPress}
            />
          </div>
          <div className="tasks-div">
            {todos.map((todo, index) => (
              <div>
                <div 
                  key={todo.id} 
                  className='todo'
                  style={taskBackgroundColor}
                >
                  <div style={{alignItems: 'center', display: 'flex'}}>
                    <img className='todolist-circle' src={circle}/>
                    <input 
                      type="checkbox" 
                      className="todo-checkbox" 
                      onChange={() => toggleTodoCompletion(index)}
                    />
                    <span style={todoTextColor} className='todo-text'>{todo.text}</span>
                  </div>
                  {/* cross button ----------------------------------------------- */}
                  <button onClick={() => removeTodo(index)} className='cross-btn'>
                    <img className='cross-img' src={cross} alt="crossimg" />
                  </button>
                </div>
                <div style={lineBackgroundColor} className="line"></div>
              </div>
              
            ))}
          </div>
            <div style={taskBackgroundColor} className="tasks-footer">
              <p className='tasks-footer-p'>{todos.length} items left</p>
              <div className="filter">
                <p className='tasks-footer-p cursor-pointer'>All</p>
                <p className='tasks-footer-p cursor-pointer'>Active</p>
                <p className='tasks-footer-p cursor-pointer'>Completed</p>
              </div>
              <p className='tasks-footer-p cursor-pointer'>
                Clear Completed
              </p>
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
