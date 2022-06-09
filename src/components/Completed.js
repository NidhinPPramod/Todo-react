import React from 'react'
import './Cards.css'
import HorizontalLine from "./Resusable Components/HorizontalLine";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


function Completed({cmptdTodo,setcmptdTodo}) {

    const clearTask = (mapindex) => {
        setcmptdTodo(cmptdTodo.filter((value, index) => {
            return index !== mapindex
        }))
    }

    return (
        <div>
            <div className="cards ">
                <h1 className="text-page">COMPLETED</h1>
                <HorizontalLine/>
                <div className="d-flex flex-column justify-content-between h-90 text-wrap ">
                    {cmptdTodo.map((value, index) => {
                        return (
                            <div key={index}
                                 className=" bg-black p-3 rounded my-2 text-white d-flex flex-row justify-content-between align-content-center">
                                <p className=" card-text m-0 text-wrap">{value}</p>
                                <RemoveCircleOutlineIcon onClick={() => clearTask(index)}/>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>

    )
}

export default Completed
