import React from 'react';
import ReactDOM from 'react-dom';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {name: "Will"};
    }
    render () {
        setTimeout(() => {
            this.setState({name: "Bob"});
        }, 2000)
        return (
            <div>
                {this.state.name}
            </div>    
        );
    }

}

ReactDOM.render(<Layout />, document.getElementById('root'));



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