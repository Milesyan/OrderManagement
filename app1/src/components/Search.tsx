import {useEffect, useState} from "react"
import {useDebounce} from "../common/hooks"
import styles from './Search.module.css';

interface ISearch {
  onSearchTermUpdate: (t: string) => void;
  count: number;
}
export default function Search(props: ISearch) {
  const [searchTerm, setSearchTerm] = useState('');
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const value = rawValue.split(".").slice(0, 2).map((ele, i) => i ? ele.slice(0, 2) : ele).join(".")
    setSearchTerm(value);
  }
  const debouncedValue = useDebounce(searchTerm, 200)
  useEffect(() => {
    props.onSearchTermUpdate(debouncedValue);
  }, [debouncedValue])
  return (
    <div className={styles.searchRoot}>
      <input
        className={styles.input}
        id='search-input'
        value={searchTerm}
        type="text"
        defaultValue=""
        placeholder="Search by price (e.g. 34.56)"
        onChange={onInputChange}
        autoComplete={"off"}
      />
      {
        debouncedValue &&
        <div className={styles.count}>
          Matching Orders: {props.count}
        </div>
      }

    </div>
  )
}