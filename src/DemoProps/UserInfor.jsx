import React, { Component } from "react";

export default class UserInfor extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="bg-warning">
        <h1>Kid</h1>
        <p>username : {this.props.name}</p>
        <button onClick={this.props.handleClick} className="btn btn-success">
          Click
        </button>
      </div>
    );
  }
}
