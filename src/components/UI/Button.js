import React from 'react';

import classes from './Button.module.css';

const Button = props => {
    return (
        <button className={classes.button} type={props.type || 'button'} onClick={props.onClick}>
            {props.children}
        </button>
    );
    //props.type이 정의되어 있지 않은 경우 button이 type이 됨
};

export default Button;