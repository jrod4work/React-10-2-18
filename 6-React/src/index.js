
// Immutability ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = { comment: "Hi" };
//     }

//     changeComment() {
//        // Wrong
//         this.state.comment = 'Hello';

//         // Correct
//         this.setState({ comment: 'Hello' });
//     }

//     render() {
//         return (
//             <div>
//                 <h2>{this.state.comment}</h2>
//                 <button onClick={this.changeComment.bind(this)}>Change To Hello</button>
//             </div>
//         );
//     }
// }

// ReactDOM.render(<App />, document.getElementById('root'));



// Impure  function //////////////////////////////
// function travel(props) {
//    return props.distance - props.speed;
// }

// let trip = { distance: 20, speed: 5 };

// trip = {distance: travel(trip), speed: 5};

// travel(trip);
// console.log(trip);

// spread operator ////////////////////////////////////////////////////////////////////

// const parameters = [4, 8, 2, 1, 6]; 

// const maxWithoutSpread = Math.max(
//   parameters[0],
//   parameters[1],
//   parameters[2],
//   parameters[3],
//   parameters[4]
// ); // Returns 8

// console.log(maxWithoutSpread);

// const maxUsingSpread = Math.max(...parameters, 9, -2); // Returns 8

// console.log(maxUsingSpread);

// const someNumbers = [5, 9, 21, 2];

// // const newNumbers = [...someNumbers, 17]; // returns [5, 9, 21, 2, 17]

// // console.log(newNumbers)

// const newNumbers = [17, ...someNumbers]; // [17, 5, 9, 21, 2]

// console.log(newNumbers)

// const person = {
//   name: 'Jess',
//   age: 42
// };

// const newPerson = { ...person, name: 'Tyler' }; // returns { name: "Jess", age: 42 }

// console.log(newPerson);

// function isEnough(value) {
//   return value >= 10;
// }

// const filtered = [5,12, 5, 8, 130, 44].filter(value => value >= 10);
// // filtered is equal to [12, 130, 44]

// console.log(filtered)

// 1.
var filtered = car => {
  return car.name === 'ford';
};
const arr = [
  { name: 'chevy', count: 2 },
  { name: 'ford', count: 5 },
  { name: 'acura', count: 3 },
  { name: 'honda', count: 16 }
].filter(filtered);

console.log(arr);

// 2.
// const arr = ['Bill', 'Joe', 'Emily', 'Andrea'];
// const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];

// const fullArray = [...arr, ...newStudents];

// console.log(fullArray);