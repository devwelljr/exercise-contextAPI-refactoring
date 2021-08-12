import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import MyContext from './MyContext';

function Cars() {
  return (
    <MyContext.Consumer>
      {({ cars }) => (
        <div>
        <div>
          <img
            className={cars.redCar ? 'car-right' : 'car-left'}
            src={carRed}
            alt='red car'
          />
          <button onClick={() => cars.moveCar('redCar', !cars.redCar)} type='button'>
            Move
          </button>
        </div>
        <div>
          <img
            className={cars.blueCar ? 'car-right' : 'car-left'}
            src={carBlue}
            alt='blue car'
          />
          <button onClick={() => cars.moveCar('blueCar', !cars.blueCar)} type='button'>
            Move
          </button>
        </div>
        <div>
          <img
            className={cars.yellowCar ? 'car-right' : 'car-left'}
            src={carYellow}
            alt='yellow car'
          />
          <button onClick={() => cars.moveCar('yellowCar', !cars.yellowCar)} type='button'>
            Move
          </button>
        </div>
      </div>
      )}
    </MyContext.Consumer>
  );
}

export default Cars;