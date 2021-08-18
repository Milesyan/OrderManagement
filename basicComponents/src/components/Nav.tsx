import React from 'react';
import styles from './Nav.module.css';

interface INav {
  title: string;
}
export default function Nav(props: INav) {
  return (
    <div className={styles.navRoot}>
      <div className={styles.container}>
        {props.title}
      </div>
    </div>
  )
}