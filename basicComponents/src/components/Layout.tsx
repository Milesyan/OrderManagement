import React, {PropsWithChildren} from 'react';
import styles from './Layout.module.css';
import Nav from './Nav';

interface ILayout {

}
export default function Layout(props: PropsWithChildren<ILayout>) {
  return (
    <>
      <div className={styles.root}>
        <Nav/>
        {props.children}
      </div>
    </>
  )
}