import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

export default class Tabs extends Component {
  static propTypes = {
    // children: PropTypes.instanceOf(Array).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      tabs: this.props.children,
      active: this.props.children[0].props.label
    };
  }

  render() {
    const { tabs, active } = this.state;
    const onClickTab = this.onClickTab;
    return (
      <div className="movie-tabs">
        <header>
          <ul className="movie-tab-links">
            {tabs.map(tab => {
              let { label } = tab.props;
              return (
                <Tab
                  active={active}
                  key={label}
                  label={label}
                  onClick={onClickTab}
                />
              );
            })}
          </ul>
        </header>
        <main className="movie-tab-content">
          {tabs.map(tab => {
            if (tab.props.label !== active) return undefined;
            return tab.props.children;
          })}
        </main>
      </div>
    );
  }

  onClickTab = tab => {
    this.setState({ active: tab });
  };
}
