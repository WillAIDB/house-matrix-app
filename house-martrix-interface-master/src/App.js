import React, { Component } from 'react'
import './App.css'
//import './tailwind.css'; 

import Buttons from './components/Buttons'
import CardDeck from './components/CardDeck'

const IMAGE_URLS = ["/home-1.jpg", "/home-2.jpg", "/home-3.jpg", "/home-4.jpg", "/home-5.jpg", "/home-6.jpg", "/home-7.jpg"]

const homes = [
  {
    image: "/home-1.jpg",
    neighborhood: "West Lake Hills",
    price: 3600000,
    beds: 5,
    baths: 4,
    sqft: 4300,
    // a description of the home thats at least two sentences long that uses the neighbordhood, price, beds, baths, and sqft as inputs
    description: "This is a beautiful home in the hills of West Lake. It has a beautiful view of the lake and a pool in the backyard. The kitchen has been recently remodeled and the house has been repainted. The house is in a great school district and is close to downtown."
  },
  {
    image: "/home-2.jpg",
    neighborhood: "Travis Heights",
    price: 800000,
    beds: 3,
    baths: 2,
    sqft: 2700,
    description: "This is a modern home in the heart of Travis Heights. It has a beautiful view of the lake and a pool in the backyard. The kitchen has been recently remodeled and the house has been repainted. The house is in a great school district and is close to downtown."
  },
  {
    image: "/home-3.jpg",
    neighborhood: "Mueller",
    price: 1000000,
    beds: 3,
    baths: 2,
    sqft: 2400,
    description: "This modern home in the family friendly neighborhood of Mueller. It has a beautiful view of the lake and a pool in the backyard. The kitchen has been recently remodeled and the house has been repainted. The house is in a great school district and is close to downtown."
  },
  {
    image: "/home-4.jpg",
    neighborhood: "Bouldin Creek",
    price: 1400000,
    beds: 3,
    baths: 2,
    sqft: 2000,
    description: "This artsy home is in the heart of Bouldin Creek. It has a beautiful view of the lake and a pool in the backyard. The kitchen has been recently remodeled and the house has been repainted. The house is in a great school district and is close to downtown."
  },
  {
    image: "/home-5.jpg",
    neighborhood: "Barton Hills",
    price: 1000000,
    beds: 4,
    baths: 2,
    sqft: 3800,
    description: "This is a beautiful home in the hills of Barton Hills. It has a beautiful view of the lake and a pool in the backyard. The kitchen has been recently remodeled and the house has been repainted. The house is in a great school district and is close to downtown."
  },
  {
    image: "/home-6.jpg",
    neighborhood: "Cedar Park",
    price: 1000000,
    beds: 3,
    baths: 2,
    sqft: 2500,
    description: "A perfect starter homes for growing families. It's in a great school district and is close to grocery stores and a farmers market."
  },
  {
    image: "/home-7.jpg",
    neighborhood: "Round Rock",
    price: 1000000,
    beds: 3,
    baths: 2,
    sqft: 2900,
    description: "Step away from the city and enjoy the quiet life in Round Rock. This home is in a great school district and is close to grocery stores and a farmers market."
  }
]

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
        <h1 className="text-4xl font-bold mb-4">House Matrix</h1>
        <CardDeck cards={this.state.cards} shiftCard={this.shiftCard.bind(this)} />
        <Buttons cards={this.state.cards} shiftCard={this.shiftCard.bind(this)} />
      </div>
    )
  }
}

export default App;
