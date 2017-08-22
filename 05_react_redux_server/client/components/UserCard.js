import React from 'react';

import UserHeader from '../components/UserHeader';
import UserContent from '../components/UserContent';
import { Link } from 'react-router';

var componentStyle = {
  backgroundColor: '#fafafa',
  width: '30%',
  height: '20%',
  overflow: 'hidden',
  boxShadow: '.25px .25px 5px .25px',
  borderRadius: '2px 2px 2px 2px',
  zIndex: 5
};

const UserCard = ({ user }) => (
  <div>
    <Link to={`/`}><h3>&lt; back</h3></Link>
    <div style={componentStyle}>
      <UserHeader user={user}/>
      <UserContent user={user}/>
    </div>
  </div>
);

export default UserCard;
