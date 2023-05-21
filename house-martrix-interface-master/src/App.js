import React, { Component } from 'react'
import './App.css'
//import './tailwind.css'; 

import Buttons from './components/Buttons'
import CardDeck from './components/CardDeck'

const IMAGE_URLS = ["/home-1.jpg", "/home-2.jpg", "/home-3.jpg", "/home-4.jpg", "/home-5.jpg", "/home-6.jpg", "/home-7.jpg"]

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: IMAGE_URLS
    }
  }

  componentDidUpdate() {
    if (this.state.cards.length === 0) this.setState({cards: IMAGE_URLS})
  }

  shiftCard() {
    let cards = this.state.cards.slice()
    cards.splice(0,1)
    this.setState({cards})
  }

  render() {
    return (
     
      <div className="App">
         <h1>House Matrix</h1>
        <CardDeck cards={this.state.cards} shiftCard={this.shiftCard.bind(this)} />
        <Buttons cards={this.state.cards} shiftCard={this.shiftCard.bind(this)} />
      </div>
    )
  }
}

export default App;
