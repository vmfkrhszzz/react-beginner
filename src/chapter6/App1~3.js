import Button from '../Button';
import styles from '../App.module.css';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setCounter(prev => prev + 1);
  const onChange = e => {
    setKeyword(e.target.value);
  };

  //console.log('언제나 실행');
  useEffect(() => {
    console.log('처음 한번만 실행');
  }, []);
  useEffect(() => {
    console.log('키워드가 변경될때 실행', keyword);
  }, [keyword]);
  useEffect(() => {
    console.log('카운트가 변경될때 실행', counter);
  }, [counter]);
  useEffect(() => {
    console.log('키워드 혹은 카운트 중 하나가 변경될때 실행', counter);
  }, [keyword, counter]);

  return (
    <div>
      <input
        onChange={onChange}
        type="text"
        placeholder="Search here"
        value={keyword}
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>clicks</button>
      <Button text="button" />
    </div>
  );
}

export default App;
