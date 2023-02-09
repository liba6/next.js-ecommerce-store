'use client';
import { useState } from 'react';

export default function InputField() {
  const [inputValue, setInputValue] = useState(1);

  return (
    <div>
      <input
        type="number"
        name="quantity"
        min="1"
        max="10"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
          console.log('inputvalue', { inputValue });
        }}
      />
    </div>
  );
}
