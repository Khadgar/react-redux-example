import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, deleteUser } from '../actions/index';

const mapStateToProps = (state) => {
  return { users: state.users, isLoading: state.isLoading, error: state.error };
};

class UserListComponent extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  removeUser = (id) => {
    this.props.deleteUser(id);
  };

  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>;
    }
    if (this.props.error) {
      return <div>{this.props.error}</div>;
    }

    return (
      <ul>
        {this.props.users.map((el, i) => (
          <li key={i}>
            <div className="cell">{el.name}</div>
            <div className="cell">{el.job}</div>
            <div className="cell">
              <img alt={el.name} src={el.avatar} height="128" width="128" />
            </div>
            <div className="remove" onClick={()=>{this.removeUser(el.id)}}>
              DELETE
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
const UserList = connect(mapStateToProps, { getUsers, deleteUser })(UserListComponent);
export default UserList;
