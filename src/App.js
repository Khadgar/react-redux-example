import React from 'react';
import './styles/App.css';
import UserList from './components/UserListComponent';
import AddUser from './components/AddUserComponent';

function App() {
  return (
    <div className="App">
      <h2>Users</h2>
      <UserList />
      <h2>Add a new User</h2>
      <AddUser />
    </div>
  );
}

export default App;
