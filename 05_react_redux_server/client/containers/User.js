import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as UserActions from '../actions/user';
import UserCard from '../components/UserCard';

class User extends PureComponent {

  static readyOnActions(dispatch, params) {
    return Promise.all([
      dispatch(UserActions.fetchUserIfNeeded(params.id)),
    ]);
  }

  componentDidMount() {
    User.readyOnActions(this.props.dispatch, this.props.params);
  }

  getUser() {
    return this.props.user[this.props.params.id];
  }

  renderUser() {
    const user = this.getUser();

    if (!user || user.readyState === UserActions.USER_FETCHING) {
      return <p>Loading...</p>;
    }

    if (user.readyState === UserActions.USER_FETCH_FAILED) {
      return <p>Failed to fetch user</p>;
    }

    if (user.readyState === UserActions.USER_FETCHED) {
      return <UserCard user={user.info} />;
    }

    return null;
  }

  render() {
    return (
      <div>
        {this.renderUser()}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(User);
