import React from 'react';
import './App.css';
import Cars from './Cars';
import TrafficSignal from './TrafficSignal';
import MyContext from './MyContext';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      cars: {
        redCar: false,
        blueCar: false,
        yellowCar: false,
      },
      signalColor: {
        color: 'red',
      }
    };
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(car, side) {
    this.setState((prev) => ({
      cars: {
        ...prev.cars,
        [car]: side,
      },
      signalColor: {
        ...prev.signalColor,
      }
    }));
  }

  changeSignal(color) {
    this.setState((prev) => ({
      cars: {
        ...prev.cars,
      },
      signalColor: {
        color,
      }
    }));
  }

  render() {
    const contextValue = {
      cars: {
        ...this.state.cars,
        moveCar: this.moveCar,
      },
      signals: {
        ...this.state.signalColor,
        changeSignal: this.changeSignal,
      }
    };

    return (
      <MyContext.Provider value={contextValue}>
        <Cars />
        <TrafficSignal />
      </MyContext.Provider>
    );
  }
}

export default App;
