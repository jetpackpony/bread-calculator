import { h } from 'preact';
import { useState } from 'preact/hooks';

const ControlledInput = ({ name, onChange, label, value }) => {
  const handleInput = (e) => {
    onChange({ name: e.target.name, value: parseFloat(e.target.value)});
  };

  return (
    <div>
      <label for={name}>{label}</label>
      <input type="number" name={name} value={value} onInput={handleInput} />
    </div>
  );
};

export default ControlledInput;