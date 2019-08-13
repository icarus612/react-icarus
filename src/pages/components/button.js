import React from 'react';

const Button = (props) =>{
    let classes = ['btn', 'btn-purple']
    if (props.disabled) classes.push('disabled');
    if (props.simple) classes.push('btn-purple-basic')
    if (props.size) classes.push(`btn-${props.size}`)
    return (
        <button onClick={props.onClick} className={classes.join(' ')} >{props.children}</button>
    )
}
export default Button;