import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//6th Example/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const App = props => {
  const favoriteCars = [
    'Honda CR-V ',
    'Toyota Highlander',
    'Ford F-150',
    'BMW X3',
    'Subaru Crosstrek'
  ];

  return <List favoriteCars={favoriteCars} />;
};

const List = props => {
  const listCars = props.favoriteCars.map((car, index) => (
    <li key={index}>{car}</li>
  ));
  return <ul>{listCars}</ul>;
};
ReactDOM.render(<App />, document.getElementById('root'));

// 5th Example /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const App = props => {
//   const items = [
//     { name: 'Bread', price: 2.35 },
//     { name: 'Milk', price: 2.0 },
//     { name: 'Eggs', price: 3.15 },
//     { name: 'Tea', price: 4.0 }
//   ];

//   return (
//     <div>
//       <List items={items} />
//       <Employee name="Elizabeth" age={27} position="Sales Manager" />
//       <GroceryList item1="Apples" item2="Oranges" item3="Mangos" />
//     </div>
//   );
// };

// const List = props => {
//   const listItems = props.items.map((item, index) => (
//     <li key={index}>
//       {item.name}: {item.price}
//     </li>
//   ));

//   return <ul>{listItems}</ul>;
// };

// const Employee = props => (
//   <ul>
//     <li>{props.name}</li>
//     <li>{props.age}</li>
//     <li>{props.position}</li>
//   </ul>
// );

// const GroceryList = props => (
//   <ul>
//     <li>{props.item1}</li>
//     <li>{props.item2}</li>
//     <li>{props.item3}</li>
//   </ul>
// );


// ReactDOM.render(<App />, document.getElementById('root'));


// 4th example/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MAP

// const App = props => {
//   const items = ['Bread', 'Milk', 'Eggs', 'Tea'];

//   return <List items={items} />;
// };

// const List = props => {
//   const listItems = props.items.map((item, index) => (
//     <li key={index}>{item}</li>
//   ));
//   return <ul>{listItems}</ul>;
// };
// ReactDOM.render(<App />, document.getElementById('root'));


// 3rd Example/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const App = props => {
//   const user = {
//     name: 'George Bailey', 
//     address: '1122 Drafty House',
//     city: 'Bedford Falls',
//     state: 'New York',
//     zip: 13148
//   };
//   return <User person={user} items="Boots, Tie, Socks" amount={100} />;
// };
// const User = props => (
//   <ul>
//     <li>Name: {props.person.name}</li>
//     <ul>
//       <li>Address: {props.person.address}</li>
//       <li>City: {props.person.city}</li>
//       <li>State: {props.person.state}</li>
//       <li>Zip: {props.person.zip}</li>
//     </ul>
//     <li>Items: {props.items}</li>
//     <li>Paid: {props.paid}</li>
//     <li>Amount: {props.amount}</li>
//     <li>Shipped: {props.shipped}</li>
//   </ul>
// );

// User.propTypes = {
//   name: PropTypes.string.isRequired,
//   address: PropTypes.string.isRequired,
//   city: PropTypes.string.isRequired,
//   state: PropTypes.string.isRequired,
//   zip: PropTypes.number.isRequired,
//   items: PropTypes.string.isRequired,
//   paid: PropTypes.bool,
//   amount: PropTypes.number.isRequired,
//   shipped: PropTypes.bool
// };

// User.defaultProps = {
//   paid: false,
//   shipped: false
// };

// ReactDOM.render(<App />, document.getElementById('root'));



// Second example/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//1st example/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
  