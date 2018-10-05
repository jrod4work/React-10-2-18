import React from 'react';
import ReactDOM from 'react-dom';

// 3nd Example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const App = props => {
    return <NumberOfStudents />;
  };
  class NumberOfStudents extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        enrolledStudents: 0,
        addAmount: 0,
        waitlistedStudents:0,
        addAmount2: 0
      };
     
    }
  
    incrementplus1() {
        this.setState({
          enrolledStudents: this.state.enrolledStudents + parseInt(this.state.addAmount + 1),
        });
      }
    incrementplus2() {
        this.setState({
          waitlistedStudents: this.state.waitlistedStudents + parseInt(this.state.addAmount + 1),
        });
      }
    increment() {
      this.setState({
        enrolledStudents: this.state.enrolledStudents + parseInt(this.state.addAmount),
      });
    }
    increment2() {
        this.setState({
            waitlistedStudents: this.state.waitlistedStudents + parseInt(this.state.addAmount),
        });
      }
   

   
    render() {
      return (
        <div>
          <h3>Enrolled Students: {this.state.enrolledStudents}</h3>
          <h3>Wait List Students: {this.state.waitlistedStudents}</h3>
        <label>Enrolled Students by 1: </label>
        <button onClick={this.incrementplus1.bind(this)}>Increase Enrolled Students</button>
        <br></br>
        <label>Increase Wait List Students by 1: </label>
        <button onClick={this.incrementplus2.bind(this)}>Increase Wait List Students</button>
        <br></br>

          <input
            type="number"
            onChange={event => this.setState({ addAmount: event.target.value })}
            value={this.state.addAmount}
          />
        <button onClick={this.increment.bind(this)}>Increase Enrolled Students</button>

        <br></br>
          <input
            type="number"
            onChange={event => this.setState({ addAmount2: event.target.value })}
            value={this.state.addAmount2}
          />
          <button onClick={this.increment2.bind(this)}>Increase Wait List Students</button>
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));


// 2nd Example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const App = props => {
//   return <BankAccount />;
// };

// class BankAccount extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       accountBalance: 2222.22,
//       addAmount: 0
//     };
//   }

//   increment() {
//     this.setState({
//       accountBalance: this.state.accountBalance + parseInt(this.state.addAmount)
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h3>Account Balance: ${this.state.accountBalance}</h3>
//         <input
//           type="number"
//           onChange={event => this.setState({ addAmount: event.target.value })}
//           value={this.state.addAmount}
//         />
//         <button onClick={this.increment.bind(this)}>Increase Amount</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'));



// const App = props => {
//     return (
//       <div>
//         <BankAccount />
//       </div>
//     );
//   };

// class BankAccount extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         savings: {
//           accountBalance: 1125.0
//         },
//         checking: {
//           accountBalance: 530.64
//         }
//       };
//     }
  
//     render() {
//       return (
//         <div>
//           <h3>Savings Account Balance: ${this.state.savings.accountBalance}</h3>
//           <h3>Checking Account Balance: ${this.state.checking.accountBalance}</h3>
//         </div>
//       );
//     }
//   }

//   ReactDOM.render(<App />, document.getElementById('root'));


// 1st Example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const App = props => {
//   return (
//     <div>
//       <Hello name="Nikki" />
//       <Hello name="Michael" />
//       <Hello name="Andrew" />
//     </div>
//   );
// };

// class Hello extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, {this.props.name}!</h1>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'));