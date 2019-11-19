import PropTypes from 'prop-types'
import React, {Component} from 'react';

import './Button.css';


export default class Button extends Component {

    render() {
        let {
            type,
            className,
            children,
            color,
            ...rest
        } = this.props;
        let styleType = 'button-type-text';

        if (type === 'outline') {
            styleType = 'button-type-outline';
        }

        return (
            <button
                className={`button ${styleType} ${className}`}
                {...rest}
            >
                {children}
            </button>
        );
    }

}

Button.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string
};
