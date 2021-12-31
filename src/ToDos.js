import { useEffect, useState } from 'react';

function ToDos() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); 
    if (toDo === '') {
      return ;
    }
    setToDos(currentToDos => [...currentToDos, toDo])
    setToDo('');
  }
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type='text'
          placeholder='Write your to do ...'
          />
          <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo, index) => <li key={index}>{toDo}</li>)}
      </ul>
    </div>
  );
}

export default ToDos;