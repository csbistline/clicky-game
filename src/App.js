import React, { Component } from 'react';
import MyNavbar from './components/MyNavbar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import logos from './logos.json'


class App extends Component {
  state = {
    message: "Click on a logo to begin",
    correct: 0,
    topScore: 0,
    logos,
    chosen: []
  }

  randomizeLogos = (logos) => {
    let logosArr = [...logos]
    logosArr.sort((a, b) => {
      return 0.5 - Math.random()
    });
    return logosArr;
  }

  pickLogo = id => {
    console.log(id);
    // make a copy of the chosen logos
    let chosenArr = [...this.state.chosen];
    // push the clicked logo to the temp array
    // set state with temp array

    // check if the picked ID is in the chosen list, update scores
    if (chosenArr.includes(id)) {
      // do stuff
      this.setState({
        correct: 0,
        chosen: [],
        message: "You picked the same logo twice! Game Over!"
      })
    } else {
      // push value to temp array
      chosenArr.push(id);
      this.setState({
        chosen: chosenArr,
        message: "You guessed correctly! Pick again!"
      })
      // update scores
      this.setState((state) => ({
        correct: state.correct + 1,
      }), 
      
      // callback function, waits until state is set, then compares correct to topScore
      () => {
        if (this.state.correct > this.state.topScore) {
          this.setState({
            topScore: this.state.correct
          })
        }
      });
    }

    // randomize logos again
    this.randomizeLogos(this.state.logos)
  }

  render() {
    return (
      <div className="App">
        <MyNavbar
          message={this.state.message}
          correct={this.state.correct}
          topScore={this.state.topScore}
        />
        <Header />
        <Main
          logos={this.state.logos}
          randomizeLogos={this.randomizeLogos}
          pickLogo={this.pickLogo}
        />
        <Footer />
      </div>
    );
  }
}

export default App;