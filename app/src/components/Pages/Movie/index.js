import React, {Component} from 'react';

import "./styles.scss";

export default class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: this.props.match.params.id
        };
    };

    componentWillReceiveProps(nextProps, nextContext) {
        try {
            new Promise((resolve, reject) => {

            }).then(result => {

            });
        } catch (e) {
            throw new Error(e);
        }
    }

    render() {
        // const { movieId: } = this.state;
        return (
            <div>
                hello from video with id: {this.props.id} and name: {this.props.name}
                {this.props.match.params.id}
            </div>
        );
    }
}


Movie.propTypes = {};

