import React, { Component } from 'react';
import MyNavbar from './components/MyNavbar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import logos from './logos.json'


class App extends Component {
  state = {
    message: "You have guessed something...",
    correct: 0,
    topScore: 0,
    logos
  }

  render() {


    return (
      <div className="App">
        <MyNavbar 
          message={this.state.message}
          correct={this.state.correct}
          topScore={this.state.topScore}/>
        <Header />
        <Main 
          logos={this.state.logos}/>
        <Footer />
      </div>
    );

  }
}

export default App;