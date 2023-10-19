import React from 'react';
import style from './PlusMinusButton.module.css';

function PlusMinusButton(props) {
    return (
        <button className={"m-1 " + style['plus-button']} onClick={props.onClick}>
            {props.plus ? "+" : "-"}
        </button>
    );
}

export default PlusMinusButton;
