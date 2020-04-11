import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    addUser: (user) => dispatch(addUser(user)),
  };
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      job: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, job } = this.state;
    this.props.addUser({ name, avatar: `https://ui-avatars.com/api/?name=${name}&size=128`, job });
    this.setState({ name: '', job: '' });
  }

  render() {
    const { name, job } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Name:</label>
          <input type="text" id="name" value={name} onChange={this.handleChange} />
          <label htmlFor="job">Company:</label>
          <input type="text" id="job" value={job} onChange={this.handleChange} />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

const AddUser = connect(null, mapDispatchToProps)(Form);

export default AddUser;
