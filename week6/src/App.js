import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import UserList from "./components/UserList";

export default class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  getUser = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({ users: res.data, loading: true });
    });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <UserList users={this.state.users} />
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}
