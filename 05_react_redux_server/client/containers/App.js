import React from 'react';
import { Link } from 'react-router';

const ulStyle = {
  color: '#ccc',
  font: '25px/1 Helvetica, Verdana, sans-serif',
  textTransform: 'uppercase',
  overflow: 'auto',
  listStyleType: 'none'
};

const usersStyle = {
  height: '25px',
  float: 'left',
  marginRight: '0px',
  borderRight: '1px solid #aaa',
  padding: '0 20px'
};

const aboutStyle = {
  height: '25px',
  float: 'left',
  marginRight: '0px',
  padding: '0 20px'
};

const App = ({ children }) => (
  <div>
    <ul style={ulStyle}>
     <li style={usersStyle}><Link to="/">Users</Link></li>
     <li style={aboutStyle}><Link to="/about">About</Link></li>
    </ul>
    <hr/>
    {children}
  </div>
);

export default App;
