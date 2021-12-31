import { useEffect, useState } from 'react';
import Button from './Button'
import styles from './useEffect.module.css'

function useEffect() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter(prev => prev + 1);
  const onChange = e => setKeyword(e.target.value);
  console.log('i run all the time');

  const iRunOnlyOnce = () => {
    console.log('CALL The API...');
  }
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5) {
      console.log('SEARCH FOR', keyword);
    }
  }, [keyword])
  useEffect(() => {
    console.log('I run when keyword and counter change');
  }, [keyword, counter]);
  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type='text' 
        placeholder='Search hear...'
        />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default useEffect;
