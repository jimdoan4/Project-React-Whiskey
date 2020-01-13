import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

class UserPage extends Component {
  // Method to GET all users
  state = {
    users: [],
    user: {
      userName: "",
      password: ""
    },
    redirectToHome: false,
    createdUser: {}
  };

  componentDidMount = () => {
    this.getAllUsers();
  };

  getAllUsers = () => {
    axios.get("/api/users").then(res => {
      // Calling API to get all users
      this.setState({ users: res.data });
    });
  };

  createUser = () => {
    axios.post("/api/users", { user: this.state.user }).then(res => {
      console.log(res.data);
      this.setState({ redirectToHome: true, createdUser: res.data });
    });
  };

  handleChange = e => {
    const newUser = { ...this.state.user };
    newUser[e.target.name] = e.target.value;
    this.setState({ user: newUser });
  };

  handleSignUp = e => {
    e.preventDefault();
    this.createUser();
  };

  render() {
    if (this.state.redirectToHome === true) {
      return <Redirect to={`/user`} />;
    }

    return (
      <div>
        {this.state.users.map(user => { // Mapping and retrieving all users
          return (
            <div>
              <Card
                key={user._id}
                className="text-dark"
              >
                {user.userName}
              </Card>
            </div>
          );
        })}

        <form onSubmit={this.handleSignUp}>
          <div>
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              name="userName"
              onChange={this.handleChange}
              value={this.state.user.userName}
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.user.password}
            />
          </div>

          <button>+ Create User</button>
        </form>
      </div>
    );
  }
}

export default UserPage;
