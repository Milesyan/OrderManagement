import {ReactNode} from 'react';
import Divider from '../common/Divider';
import Search from './Search';
import styles from './Table.module.css';

interface ITable {
  supportSearch: boolean;
  text: string;
  searchPlaceholder?: string;
  renderHeader: () => ReactNode;
  renderContent: () => ReactNode;
  onSearchUpdate: (term: string) => void;
}
export default function Table(props: ITable) {
  return (
    <>
      {
        props.supportSearch &&
        <>
          <Search
            placeholder={props.searchPlaceholder}
            onSearchTermUpdate={props.onSearchUpdate} text={props.text} />
          <Divider />
        </>
      }
      <table className={styles.table}>
        <thead>
          {props.renderHeader()}
        </thead>
        <tbody>
          {props.renderContent()}
        </tbody>
      </table>
    </>
  );
}
