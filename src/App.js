import React from 'react';
import HeaderApp from "./Components/HeaderApp";
import Component1 from './propsAndstate/component1';
import Component2 from './propsAndstate/component2';
import Counter from './propsAndstate/counter';
function App() {
  return (
    <div className="HeaderApp">
      {/* {<HeaderApp/>} */ <Counter/>}
      <Component1 name="Eldorbek"/>
      <Component2/>
    </div>
  );
}

export default App;
