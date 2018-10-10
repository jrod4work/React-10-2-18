
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
function travel(props) {
   return props.distance - props.speed;
}

let trip = { distance: 20, speed: 5 };

trip = {distance: travel(trip), speed: 5};

travel(trip);
console.log(trip);


const parameters = [4, 8, 2, 1, 6];

const maxWithoutSpread = Math.max(
  parameters[0],
  parameters[1],
  parameters[2],
  parameters[3],
  parameters[4]
); // Returns 8

const maxUsingSpread = Math.max(...parameters); // Returns 8