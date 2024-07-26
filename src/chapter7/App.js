import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = e => setToDo(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo('');
  };
  console.log(toDos);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write todo"
        />
        <button>Add To Do({toDos.length})</button>
      </form>
    </div>
  );
}

export default App;
