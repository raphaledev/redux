import {useState} from 'react';
import { AddTask } from "./components/AddTask";
import { Task } from "./components/Task";
import {useDispatch, useSelector} from 'react-redux';
import {deleteAll} from './redux/todoapp/actions';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.operationsReducer);
  const [editFormVisibility, setEditFormVisibility]=useState(false);
  const [editTodo, setEditTodo]=useState('');
  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }
  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }

    return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center">TODO LIST</h1>
      <AddTask editFormVisibility={editFormVisibility} editTodo={editTodo}
      cancelUpdate={cancelUpdate}/>
      <Task handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
      {todos.length > 1 && (
        <button className='btn btn-danger btn-md delete-all'
        onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
      )}
    </div>
  );
}

export default App;