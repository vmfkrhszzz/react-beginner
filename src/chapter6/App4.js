import Button from '../Button';
import styles from '../App.module.css';
import { useEffect, useState } from 'react';

// create할떄마다 실행됨
function Hello() {
  // 제일 효율적임
  useEffect(() => {
    console.log('hi');
    return () => console.log('bye');
  });

  /*

  // 방법 1
  useEffect(() => {
    console.log('created');
    // return () => : cleanup funtion이라고 함
    return () => console.log('destoryes');
  });

  //방법 2
  function hi() {
    console.log('hi');
    return bye;
  }
  function bye() {
    console.log('bye');
  }
  useEffect(hi, []);
  */
  return <h1>Hello!</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);

  return (
    <div>
      {/* 컴포넌트를 create 하거나 destory 함 */}
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;
