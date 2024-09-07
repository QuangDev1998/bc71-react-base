import React, { Component } from "react";

export default class DemoState extends Component {
  //  state ~ setState
  //    không update trực tiếp giá trị state , phải uppdate thông qua setState
  state = {
    soLuong: 0,
    username: "Alice",
  };
  // update state => this.setState({}) => re-render
  handleTang = () => {
    console.log("yes tăng");
    this.setState({
      soLuong: this.state.soLuong + 1,
    });
  };
  handleGiam = () => {
    console.log("yes giảm");
    this.setState({
      soLuong: this.state.soLuong - 1,
    });
  };
  render() {
    return (
      <div className="container">
        <h2
        // style={{
        //   color: "red",
        //   backgroundColor: "blue",
        // }}
        >
          DemoState - {this.state.username}
        </h2>
        <button
          onClick={() => {
            this.setState({
              username: this.state.username === "Alice" ? "Tomy" : "Alice",
            });
          }}
        >
          Change Alice to Tomy
        </button>
        <br />
        <button onClick={this.handleGiam} className="btn btn-dark">
          -
        </button>
        <span>{this.state.soLuong}</span>
        <button onClick={this.handleTang} className="btn btn-danger">
          +
        </button>
      </div>
    );
  }
}
