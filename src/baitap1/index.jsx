import React, { Component } from "react";
import Header from "./header";
import Navigation from "./navigation";
import Content from "./content";
import Footer from "./footer";
class Baitap1 extends Component {
  //    render là method của class component dung để hiện thị giao diện
  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <Navigation />
          <Content />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Baitap1;
