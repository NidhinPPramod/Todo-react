import React, {useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Completed from "./components/Completed";
import Progress from "./components/Progress";
import Deleted from "./components/Deleted";


function App() {

    const [toDos, setToDos] = useState([])
    const [toDo, setToDo] = useState('')
    const[delTodo,setDelToDo]=useState([])
    const[cmptdTodo,setcmptdTodo]=useState([])



    const addNewTask = () => {
        if (toDo !== '') {
            setToDos([...toDos, toDo])
            setToDo('')
        }
    }

    const deleteTask = (mapindex) => {
        console.log(mapindex)
        setToDos(toDos.filter((value, index) => {
            return index !== mapindex
        }))
        setDelToDo([...delTodo,...toDos.filter((value, index) => {
            return index === mapindex
        })])
    }

    const completeTask=(mapindex)=>{
        setToDos(toDos.filter((value, index) => {
            return index !== mapindex
        }))
        setcmptdTodo([...cmptdTodo,...toDos.filter((value, index) => {
            return index === mapindex
        })])
    }


    return (
        <div>
            <Navbar/>
            <div className="home-background container-fluid py-5">
                <div className="d-flex flex-row justify-content-between px-5  ">
                    <div>
                        <Completed cmptdTodo={cmptdTodo} setcmptdTodo={setcmptdTodo}  />
                    </div>
                    <div>
                        <Progress toDo={toDo} setToDo={setToDo} toDos={toDos} addNewTask={addNewTask}
                                  deleteTask={deleteTask} completeTask={completeTask}/>
                    </div>
                    <div>
                        <Deleted deltoDo={delTodo} setDelToDo={setDelToDo}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
