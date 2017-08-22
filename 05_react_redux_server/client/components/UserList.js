import React from 'react';
import { Link } from 'react-router';

var userListStyle = {
  'listStyleType': 'none',
  'margin': 0,
  'padding': 0,
};

var userListItemStyle = {
  font: '200 20px/1.5 Helvetica, Verdana, sans-serif',
  borderBottom: '1px solid #ccc',
  border: 'none',
  textDecoration: 'none',
  color: '#000',
  display: 'block',
  width: '300px',
  ':hover': {
    fontSize: '30px',
    background: '#f6f6f6'
  }
}

const UserList = ({ users }) => (
  <div>
    <h1>Users</h1>
    <ul style={userListStyle}>
      {users.map(user => (
        <li key={user.id} style={userListItemStyle}>
          <Link to={`user/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default UserList;
