import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Button from '../button/Button';

import './FeedFilterBar.css';


export default class FeedFilterBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: 'all'
        };
    }

    handleSelect = (value) => {
        let {onSelect} = this.props;

        this.setState({
            selected: value
        });

        onSelect(value);
    }

    render() {
        let {selected} = this.state;

        return (
            <div className="feed-filter-bar">
                <span className="filter-bar-label">Filter By:</span>
                <Button
                    className={selected === 'all' ? 'selected' : ''}
                    onClick={() => this.handleSelect('all')}
                    type="outline"
                >
                    All
                </Button>
                <Button
                    className={selected === 'trending' ? 'selected' : ''}
                    onClick={() => this.handleSelect('trending')}
                    type="outline"
                >
                    Trending
                </Button>
                <Button
                    className={selected === 'open' ? 'selected' : ''}
                    onClick={() => this.handleSelect('open')}
                    type="outline"
                >
                    Open Tasks
                </Button>
                <Button
                    className={selected === 'completed' ? 'selected' : ''}
                    onClick={() => this.handleSelect('completed')}
                    type="outline"
                >
                    Completed Tasks
                </Button>
            </div>
        );
    }

}

FeedFilterBar.propTypes = {
    onSelect: PropTypes.func
};
