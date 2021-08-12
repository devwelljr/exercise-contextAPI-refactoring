import React from 'react';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import MyContext from './MyContext';

const renderSignal = (signals) => {
  if (signals.color === 'red') return redSignal;
  if (signals.color === 'yellow') return yellowSignal;
  if (signals.color === 'green') return greenSignal;
  return null;
};

function TrafficSignal() {
  return (
    <MyContext.Consumer>
      {({ signals }) => (
        <div>
          <div className='button-container'>
            <button
              onClick={() => signals.changeSignal('red')}
              type='button'
            >
              Red
            </button>
            <button
              onClick={() => signals.changeSignal('yellow')}
              type='button'
            >
              Yellow
            </button>
            <button
              onClick={() => signals.changeSignal('green')}
              type='button'
            >
              Green
            </button>
          </div>
          <img className='signal' src={renderSignal(signals)} alt='' />
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default TrafficSignal;
