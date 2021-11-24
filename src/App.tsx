import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome';
import { ToggleButton } from './ToggleButton';
import { UserForm } from './UserForm';
import { LifecycleMethod, LifecycleMethodWithFunction } from './LifecycleMethod';
import { ConditionalRender } from './ConditionalRender';
import { MultipleItems } from './MultipleItems';
import { MultipleItemsAPI } from './MultipleItemsAPI';
import { CustomHooks } from './CustomHooks';
import { UseRefExample } from './UseRefExample';
import { UseReducerHook } from './UseReducerHook';
import { UseContextHook } from './UseContextHook';


function sum(a: number, b: number) {
  return a + b;
}

interface SumProps {
  a: number,
  b: number
}

function SumComponent(props: SumProps) {
  return (
    <>Sum value: {props.a + props.b}</>
  )
}

function App() {
  const addVal = sum(5, 4);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        <p>Sum of 2 numbers: {addVal}</p>
        <p>Sum of 2 numbers: {sum(5, 6)}</p>
        <p>Sum of 2 numbers with Components: <SumComponent a={2} b={3} /></p>
        <br />------------<br />
        <Welcome name='Suraj' id='isuraj' />
        <br />------------<br />
        <ToggleButton />
        <br />------------<br />
        <UserForm />
        <br />------------<br />
        <LifecycleMethod initialValue={0} />
        <br />------------<br />
        <LifecycleMethodWithFunction initialValue={0} />
        <br />------------<br />
        <ConditionalRender />
        <br />------------<br />
        <MultipleItems />
        <br />------------<br />
        <MultipleItemsAPI />
        <br />------------<br />
        <CustomHooks />
        <br />------------<br />
        <UseRefExample />
        <br />-----------<br />
        <UseReducerHook />
        <br />-----------<br />
        <UseContextHook />
        <br />-----------<br />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
// export SumComponent;
