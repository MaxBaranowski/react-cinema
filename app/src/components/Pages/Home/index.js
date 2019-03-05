import React, { Component } from 'react';
import { store } from "../../../store";
import { hideMenu } from "../../../actions";

import "./testGrid.scss";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

  }

  componentDidMount() {
    store.dispatch(hideMenu(store.getState().showMenu));
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <div className="grid-wrapper">
          <div className="item1">1</div>
          <div className="item2"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dolores, laborum adipisci quod voluptas itaque cupiditate accusamus quisquam accusantium explicabo porro tenetur hic ea ducimus commodi, expedita similique vitae nihil qui nemo? Culpa omnis velit explicabo dolorum. Nihil rerum placeat eligendi accusamus dolores nisi. Sint sed nihil necessitatibus quos est.</p></div>
          <div className="item3">3</div>
          <div className="item4">4</div>
          <div className="item5">5</div>
          <div className="item6">6</div>
          <div className="item7">7</div>
        </div>
        {/* {store.getState().showMenu.tos} */}
      </div >
    )
  }
}
