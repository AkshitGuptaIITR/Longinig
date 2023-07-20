import React, { useState } from 'react'
import styles from "./button.module.scss";

const Button = (props) => {
    // const {styles,text} = props;
  return (
    <button className={styles.button} {...props}>
        {props.children}
    </button>
  )
}

export default Button