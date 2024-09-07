import React, { Component } from "react";
import UserInfor from "./UserInfor";
export default class DemoProps extends Component {
  state = {
    username: "Alice",
  };
  //   state ở đâu thì setState ở đó
  handleChange = () => {
    let name = this.state.username == "Alice" ? "Bob" : "Alice";
    this.setState({ username: name });
  };
  render() {
    return (
      <div className=" bg-danger p-5">
        <h2> DemoProps</h2>
        <UserInfor name={this.state.username} handleClick={this.handleChange} />
      </div>
    );
  }
}
// this.props object được dùng để nhận data được truyền từ bên ngoài vào component
