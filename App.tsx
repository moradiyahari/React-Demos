import * as React from 'react';
import { useDebouncedState } from './hooks/useDebouncedState';
import { useIdle } from './hooks/useIdle';
import './style.css';

export default function App() {
  const idle = useIdle(5000);
  const [value, setValue] = useDebouncedState('', 1000);

  return (
    <div>
      <h1>Hello</h1>
      <br/>
      useIdle Demo: {idle? <label>Idle</label> : <label>Not Idle</label> }
      <br/>
      <br/>
      <input
        placeholder="Enter value to see debounce effect"
        style={{width: '300px'}}
        defaultValue={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <br/>
      <label>Debounced value: {value}</label>
    </div>
  );
}
