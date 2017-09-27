import React from 'react';
import styles from '../styles/header.css'
import logo from '../images/Etimo-blue-transparent-nomargins-1000x246.png'

const Header = () => {
  return(
    <div className={styles.header}>
      <a href="https://etimo.se/"><img className={styles.logo} src={logo}/></a>
      <h1>Etimo Diamonds</h1>
      <a className={styles.link} href="https://github.com/Etimo/diamonds/blob/master/Doc/API%20Specification.txt">How to play</a>
    </div>
  );
}

export default Header;
