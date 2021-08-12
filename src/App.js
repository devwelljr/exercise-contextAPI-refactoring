import React from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(state) {
    this.setState((prevState) => ({
      ...prevState,
      [Object.keys(state)[0]]: !Object.values(state)[0],
    }))
  }

  render() {
    const contextValue = {
      ...this.state,
      moveCar: this.moveCar,
    }

    return (
      <MyContext.Provider
        value={contextValue}
      >
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
