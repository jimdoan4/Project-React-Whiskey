import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const UserContainer = styled(Link)`
  .user-field {
    color: #8a8a8a;
    padding: 10px;
    letter-spacing: 1px;
    background-color: white;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 16px;
    border: solid 2px 0px 2px 0px #7d7d7d;
    font-size: 20px;
    margin: 10px;
  }
`;

const UserWrapper = styled.div`
  @import "https://fonts.googleapis.com/css?family=Roboto+Condensed";
  @import "https://fonts.googleapis.com/css?family=Abel";

  input {
    color: #8a8a8a;
    letter-spacing: 1px;
    background-color: black;
    margin: 0;
    width: 360px;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 16px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-border-radius: none;
    -moz-border-radius: none;
    -ms-border-radius: none;
    -o-border-radius: none;
    border-radius: none;
  }
  input:focus {
    outline: none;
  }
  .style-4 input {
    padding: 10px;
    border: none;
    border-bottom: solid 2px #7d7d7d;
    -webkit-transition: border 0.3s;
    -moz-transition: border 0.3s;
    -o-transition: border 0.3s;
    transition: border 0.3s;
  }
  .style-4 input:focus,
  .style-4 input.focus {
    border-bottom: solid 2px #dcdcdc;
  }

  button.animated-button {
    font-family: "Abel", sans-serif;
    background: black;
    position: relative;
    display: block;
    width: 360px;
    margin: 30px auto 0;
    padding: 14px 15px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    letter-spacing: 0.08em;
    border-radius: 0;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
  }
  button.animated-button:after {
    content: "";
    position: absolute;
    height: 0%;
    left: 50%;
    top: 50%;
    width: 150%;
    z-index: -1;
    -webkit-transition: all 0.75s ease 0s;
    -moz-transition: all 0.75s ease 0s;
    -o-transition: all 0.75s ease 0s;
    transition: all 0.75s ease 0s;
  }
  button.animated-button:hover {
    color: white;
    text-shadow: none;
  }

  button.animated-button {
    position: relative;
    display: block;
    margin: 30px auto 0;
    padding: 14px 15px;
    color: #dfdfdf;
    font-size: 14px;
    border-radius: 0;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    letter-spacing: 0.08em;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
  }
  button.animated-button.thar-three {
    color: #dfdfdf;
    cursor: pointer;
    display: block;
    position: relative;
    border: 2px solid #dfdfdf;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  }
  button.animated-button.thar-three:hover {
    color: #000 !important;
    background-color: transparent;
    text-shadow: nthree;
  }
  button.animated-button.thar-three:hover:before {
    left: 0%;
    right: auto;
    width: 100%;
  }
  button.animated-button.thar-three:before {
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
    width: 0px;
    z-index: -1;
    content: "";
    color: #000 !important;
    background: #dfdfdf;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  }
`;
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
      <div className="text-center">
        <h1>Select User</h1>

        <br />
        {this.state.users.map(user => {
          // Mapping and retrieving all users
          return (
            <div>
              <UserContainer>
                <Card
                  to={`/user/${user._id}`}
                  key={user._id}
                  className="user-field"
                >
                  {user.userName}
                </Card>
              </UserContainer>
            </div>
          );
        })}
        <UserWrapper>
          <div className="container">
            <form onSubmit={this.handleSignUp} className="text-center">
              <div class="input-list style-4 clearfix text-light">
                <input
                  placeholder="USERNAME"
                  type="text"
                  name="userName"
                  onChange={this.handleChange}
                  value={this.state.user.userName}
                  id="fname"
                  required
                  autocomplete="off"
                />
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="PASSWORD"
                  onChange={this.handleChange}
                  value={this.state.user.password}
                  id="username"
                  required
                />
                <br />
                <br />
                <button
                  type="submit"
                  class="btn btn-sm animated-button thar-three"
                  onclick="Validate()"
                >
                  Submit{" "}
                </button>
              </div>
            </form>
          </div>
        </UserWrapper>
      </div>
    );
  }
}

export default UserPage;
