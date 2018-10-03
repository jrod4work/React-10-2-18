import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


// Any React components created will always be uppercase 

const App = props => {
  return (
    <Employee name="Elizabeth" age={27} position="Sales Manager"/>
  )
}
const Employee = props => (
    <ul>
      <li>{props.name}</li>
      <li>{props.age}</li>
      <li>{props.position}</li>
    </ul>
  );

  Employee.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    position: PropTypes.string
  };

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

//1st example*****************

// const App = props => {
//     return (
//       <div>
//         <Hello name="Nikki" />
//         <Hello name="Michael" />
//         <Hello name="Andrew" />
//       </div>
//     );
//   };
  
//   const Hello = props => (
//     <div>
//       <h1>Hello, {props.name}!</h1>
//     </div>
//   );
  
//   ReactDOM.render(<App />, document.getElementById('root'));
  