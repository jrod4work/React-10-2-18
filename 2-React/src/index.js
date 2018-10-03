import React from 'react';
import ReactDOM from 'react-dom';


const groceryList = (
    item1,
    item1Price,
    item2,
    item2Price,
    item3,
    item3Price
  ) => {
    return (
      <ul>
        <li>{item1}</li>
        <ul>
          <li>{item1Price}</li>
        </ul>
        <li>{item2}</li>
        <ul>
          <li>{item2Price}</li>
        </ul>
        <li>{item3}</li>
        <ul>
          <li>{item3Price}</li>
        </ul>
      </ul>
    );
  };

// 1st example
// const item1 = 'Apples';
// const item1Price = '$1.00 per lb';
// const item2 = 'Oranges';
// const item2Price = '$.70 per lb';
// const item3 = 'Mangos';
// const item3Price = '$2.00 each';

// 2nd example

// const groceryList = (
//     <ul>
//       <li>Apples</li>
//       <ul>
//         <li>$1.00 per lb</li>
//       </ul>
//       <li>Oranges</li>
//       <ul>
//         <li>$.70 per lb</li>
//       </ul>
//       <li>Mangos</li>
//       <ul>
//         <li>$2.00 each</li>
//       </ul>
//     </ul>
//   );
ReactDOM.render(
//   <ul>
//     <li>{item1}</li>
//     <ul>
//       <li>{item1Price}</li>
//     </ul>
//     <li>{item2}</li>
//     <ul>
//       <li>{item2Price}</li>
//     </ul>
//     <li>{item3}</li>
//     <ul>
//       <li>{item3Price}</li>
//     </ul>
//   </ul>,

// 2nd example
// groceryList

// 3rd example

groceryList(
    'Apples',
    '$1.00 per lb',
    'Oranges',
    '$.70 per lb',
    'Mangos',
    '$2.00 each'
  )
  , document.getElementById('root')
);