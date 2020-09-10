import React from 'react';
import './App.css';
import './components/QuoteBox';
import QuoteBox from './components/QuoteBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
          author: 'Nelson Mandela'
        },
        {
          quote: 'The way to get started is to quit talking and begin doing.',
          author: 'Walt Disney'
        },
        {
          quote: 'If life were predictable it would cease to be life, and be without flavor.',
          author: 'Eleanor Roosevelt'
        },
        {
          quote: 'Life is what happens when you\'re busy making other plans.',
          author: 'John Lennon'
        }
      ], 
      randomQuoteNumber: 0
    }
    this.generateNewQuote = this.generateNewQuote.bind(this);
  }
  generateNewQuote() {
    const randomNumber = Math.floor(Math.random() * 4);
    this.setState(
      {
        randomQuoteNumber: randomNumber
      }
    )
  }
  render() {
    return (
      <div className="App">
        <QuoteBox quote={this.state.quotes[this.state.randomQuoteNumber]}/>
        <button id="new-quote" onClick={this.generateNewQuote}>New Quote</button>
      </div>
    );
  }
}

export default App;
