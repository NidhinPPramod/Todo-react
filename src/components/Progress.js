import React from 'react'
import './Cards.css'
import HorizontalLine from "./Resusable Components/HorizontalLine";
import {TextField} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';



function Progress({addNewTask,toDos, toDo, setToDo,deleteTask,completeTask}) {

    const onHandleChange = (event) => {
        setToDo(event.target.value)
    }
    return (
        <div>
            <div className="cards ">
                <div className="d-flex flex-row align-items-center">
                    <TextField value={toDo} onChange={onHandleChange} className="w-100" required
                               id="outlined-required" label="Enter Your Tasks" variant="outlined"/>
                    <AddCircleIcon  onClick={addNewTask}/>
                </div>
                <HorizontalLine/>
                <div>
                    <h1 className="text-page">ON PROGRESS</h1>
                    <HorizontalLine/>
                </div>
                <div className="d-flex flex-column justify-content-between h-90 text-wrap ">
                    {toDos.map((value,index) => {
                        return (
                            <div key={index}
                                 className=" bg-black p-3 rounded my-2 text-white d-flex flex-row justify-content-between align-content-center">
                                <p className=" card-text m-0 text-wrap">{value}</p>
                                <div className="d-flex flex-row justify-content-center align-items-center">
                                    <CheckCircleIcon className="mx-2" onClick={()=>completeTask(index)}/>
                                    <DeleteIcon onClick={()=>deleteTask(index)}/>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>

            </div>

        </div>
    )
}

export default Progress
