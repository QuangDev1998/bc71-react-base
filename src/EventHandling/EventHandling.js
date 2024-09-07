import React, { Component } from "react";

export default class EventHandling extends Component {
  handleSayHello = () => {
    console.log("hello user");
  };
  handleSayHelloWithName = (username) => {
    console.log(`hello ${username}`);
  };
  render() {
    return (
      <div>
        <h2>EventHandling</h2>
        {/* không để dấu () */}
        <button onClick={this.handleSayHello} className="btn btn-success">
          Say Hello
        </button>
        <br />
        {/* dùng arrow function đối với hàm có tham số  */}
        <button
          // phím tắt ( anfn ) tạo ra arrow function
          onClick={() => {
            this.handleSayHelloWithName("Sai Gon");
          }}
          //   onClick={() => {
          //     this.handleSayHelloWithName("alice");
          //   }}
        >
          Say Hello With Name
        </button>
      </div>
    );
  }
}
