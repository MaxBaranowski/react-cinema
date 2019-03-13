import React, {Component} from 'react';

import "./styles.scss";

export default class Movie extends Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        console.log(this.props);
        return (
            <div>
                hello from video with id: {this.props.id} and name: {this.props.name}
                {this.props.match.params.id}
            </div>
        );
    }
}


Movie.propTypes = {};

