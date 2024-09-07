import React, { Component } from "react";
import ItemPhone from "./ItemPhone";

export default class ListPhone extends Component {
  render() {
    return (
      <div className="row">
        {/* phone la 1 phan tu trong array */}
        {this.props.list.map((phone, index) => {
          return (
            <ItemPhone
              key={index}
              phone={phone}
              handleClick={this.props.handleClickView}
            />
          );
        })}
      </div>
    );
  }
}
