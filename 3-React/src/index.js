import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const App = props => {
  const user = {
    name: 'George Bailey',
    address: '1122 Drafty House',
    city: 'Bedford Falls',
    state: 'New York',
    zip: 13148
  };
  return <User person={user} items="Boots, Tie, Socks" amount={100} />;
};
const User = props => (
  <ul>
    <li>Name: {props.person.name}</li>
    <ul>
      <li>Address: {props.person.address}</li>
      <li>City: {props.person.city}</li>
      <li>State: {props.person.state}</li>
      <li>Zip: {props.person.zip}</li>
    </ul>
    <li>Items: {props.items}</li>
    <li>Paid: {props.paid}</li>
    <li>Amount: {props.amount}</li>
    <li>Shipped: {props.shipped}</li>
  </ul>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.number.isRequired,
  items: PropTypes.string.isRequired,
  paid: PropTypes.bool,
  amount: PropTypes.number.isRequired,
  shipped: PropTypes.bool
};

User.defaultProps = {
  paid: false,
  shipped: false
};

ReactDOM.render(<App />, document.getElementById('root'));



// Second example

// const App = props => {
//   return (
//     <Employee name="Elizabeth" age={27} position="Sales Manager"/>
//   )
// }
// const Employee = props => (
//     <ul>
//       <li>{props.name}</li>
//       <li>{props.age}</li>
//       <li>{props.position}</li>
//     </ul>
//   );

//   Employee.propTypes = {
//     name: PropTypes.string.isRequired,
//     age: PropTypes.number.isRequired,
//     position: PropTypes.string
//   };

//   Employee.defaultProps = {
//     position: "employee"
//   }

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// );

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
  