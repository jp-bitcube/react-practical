import { useState } from 'react'

const DEFAULT_INCREMENT_COUNTER_OPTIONS = {
  countType: 'incrementBy',
  minMax: { min: 1, max: 50 },
  suffix: '',
};

const DEFAULT_PERCENTAGE_COUNTER_OPTIONS = {
  countType: 'percentCount',
  minMax: { min: 0, max: 100 },
  suffix: '%',
};

export default function Counter() {
  const [ percentCount, setPercentCount ] = useState(0);
  const [ incrementBy, setIncrementBy ] = useState(1);
  const [ message, setMessage ] = useState(null);

  function provideConditionalMessage(count, options) {
    const { min, max, suffix } = options;
    if (count >= min && count <= max) {
      setMessage(null);
    }

    if (count < min) {
      setMessage(`Unable to decrease below ${min} ${suffix}`);
    }

    if (count > max) {
      setMessage(`Unable to increment past ${max} ${suffix}`);
    }
  }

  function counter(isIncrease, options, valueClicked = 1) {
    const { min, max } = options.minMax;
    let calculatedValue = 0;
    let currentValue = 0; 

    if (options.countType === 'incrementBy') {
      currentValue = incrementBy;
    }

    if (options.countType === 'percentCount') {
      currentValue = percentCount;
    }

    calculatedValue = isIncrease ? (currentValue + valueClicked) : (currentValue - valueClicked);
    provideConditionalMessage(calculatedValue, options);

    calculatedValue = calculatedValue <= min ? min : calculatedValue;
    calculatedValue = calculatedValue >= max ? max : calculatedValue;

    if (calculatedValue >= min && calculatedValue <= max) {
      options.countType === 'incrementBy' ?  setIncrementBy(calculatedValue) : null;
      options.countType === 'percentCount' ?  setPercentCount(calculatedValue) : null;
    }
  }

  return (
      <div className="Counter">
        <h3>Count By: { incrementBy } </h3>
        <br/>
        <button onClick={ () => counter(true, DEFAULT_INCREMENT_COUNTER_OPTIONS) }><b>+</b></button>
        <button onClick={ () => counter(false, DEFAULT_INCREMENT_COUNTER_OPTIONS) }><b> - </b></button>
        <br/>
        <h3> Average Percentage: { percentCount }% </h3>
        <br/>
        <button onClick={ () => counter(true, DEFAULT_PERCENTAGE_COUNTER_OPTIONS, incrementBy) }><b>+</b></button>
        <button onClick={ () => counter(false, DEFAULT_PERCENTAGE_COUNTER_OPTIONS, incrementBy) }><b> - </b></button>
        <br/>
        { message ? <h4>{ message }</h4> : null }
      </div>
    )
} 