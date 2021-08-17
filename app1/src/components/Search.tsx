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
    setSearchTerm(e.target.value);
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
        type="text"
        defaultValue=""
        placeholder="Search orders by price"
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