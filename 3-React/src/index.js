import React from 'react';
import ReactDOM from 'react-dom';

// Any React components created will always be uppercase 

const App = props => {
    return (
      <div>
        <Hello name="Nikki" />
        <Hello name="Michael" />
        <Hello name="Andrew" />
      </div>
    );
  };
  
  const Hello = props => (
    <div>
      <h1>Hello, {props.name}!</h1>
    </div>
  );
  
  ReactDOM.render(<App />, document.getElementById('root'));
  