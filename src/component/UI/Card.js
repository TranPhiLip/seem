import './Card.css';
import React from 'react';

const Card = (props) => {
    // 'card ' -> có cách ra
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;    
