import React, { Component } from "react";

export default class Tab extends Component {
  render() {
    const { className, label, active } = this.props;
    const classname = active === label ? className + " active" : className;
    return (
      <li className={classname}>
        <a onClick={this.onClick} href={"#" + label}>
          {label}
        </a>
      </li>
    );
  }

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };
}
