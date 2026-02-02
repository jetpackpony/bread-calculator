import { h } from 'preact';
import ControlledInput from './ControlledInput';
import { useState, useEffect, useRef } from 'preact/hooks';
import countWeights from '../utils/countWeights';

const gramsInTeaspoonSalt = 5.9;
const gramsInTeaspoonYeast = 3.1;

const App = ({ info }) => {
  const [values, setValues] = useState({
    starterHydration: 1,
    starterProportion: 0,
    saltProportion: 0.02,
    targetWeight: 600,
    targetHydration: 0.82
  });

  const handleChange = ({ name, value}) => {
    setValues({
      ...values,
      ...{ [name]: value }
    });
  };

  const results = countWeights(values);
  const saltGrams = Math.round(results.salt);
  const saltTeaspoons = Math.round(results.salt / gramsInTeaspoonSalt * 100) / 100;
  const yeastGrams = Math.round(results.yeast);
  const yeastTeaspoons = Math.round(results.yeast / gramsInTeaspoonYeast * 100) / 100;

  return (
    <div>
      <h3>Starter</h3>
      <ControlledInput
        label="Hydration, %"
        name="starterHydration"
        value={values.starterHydration}
        onChange={handleChange}
      />
      <ControlledInput
        label="Amount, %"
        name="starterProportion"
        value={values.starterProportion}
        onChange={handleChange}
      />

      <h3>Targets</h3>
      <ControlledInput
        label="Salt Amount, %"
        name="saltProportion"
        value={values.saltProportion}
        onChange={handleChange}
        step={0.01}
      />
      <ControlledInput
        label="Target Weight, g."
        name="targetWeight"
        value={values.targetWeight}
        onChange={handleChange}
      />
      <ControlledInput
        label="Target Hydration, %"
        name="targetHydration"
        value={values.targetHydration}
        onChange={handleChange}
      />
      <h3>Results</h3>
      <div>Flour: {Math.round(results.flour)} g.</div>
      <div>Water: {Math.round(results.water)} g.</div>
      <div>Yeast: {yeastGrams} g. ({yeastTeaspoons} tsp.)</div>
      <div>Salt: {saltGrams} g. ({saltTeaspoons} tsp.)</div>
      <div>Starter: {Math.round(results.starter)} g.</div>
    </div>
  );
};

export default App;