import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import { renderMatches } from 'react-router-dom';

class App extends Component {

  state = {
    question: "What is the world's deepest lake?",
    answer: "Lake Baikal, in Russian Siberia"
  }

  revealAnswerHandler = (event) =>
{
  this.setState({question: this.state.answer })
};


render() {
  return (
    <div className='App'>
    <header className='App-header'>
      <img src='(logo)'className='App-logo' alt='logo'/>
      <h1>30 Days of React</h1>
      <h2>Day one/ Question & Answer</h2>
    </header>

    <Question 
    question={this.state.question}
    click={this.revealAnswerHandler}/>
    </div>
  );
}
}


export default App;
