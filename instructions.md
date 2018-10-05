React-10-2-18
to install npm and node globally:
npm install npm@latest -g
Within the example folder run
npm install
npm start

Add these two files in the src/index.js file

import React from 'react';
import ReactDOM from 'react-dom';

// Any React components created will always be uppercase 

In order for Gitkraken to ignore node_modules_

touch .gitignore && echo "node_modules/" >> .gitignore

Prop Validation

npm install --save prop-types

import PropTypes from 'prop-types';


// 1st Example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

