import React, { useState } from "react";
import TaskList from "./TaskList";
import './TaskForm.css';
function TaskForm(){
    const [task,setTask]=useState(TaskList);
    const[newtask,setNewtask]=useState("");
   
    //FONCTION POUR changer la valeur de input 
    const handlechangeInput=(event)=>{
       setNewtask(event.target.value);
       
    }
//FONCTION POUR AJOUTER UNE TACHE
const handleaddTask=()=>{
  setTask([...task,newtask]);
  console.log(setTask);
setNewtask("");
}
//FONCTION POUR supprimer UNE TACHE
const handledeleteTask=(index)=>{
    const Updatedtask=task.filter((_,i) =>i!== index);
    setTask(Updatedtask)
}


//FONCTION POUR AJOUTER UNE TACHE
const handlemoveTaskup=(index)=>{

}
//FONCTION POUR AJOUTER UNE TACHE
const handlemoveTask=(index)=>{

}

    return(
        <div className="contenair">
           <div className="TO-DO-LIST">
           <h1>
            TO DO LIST
           </h1>
           </div>
           <form >
             <input type="text" placeholder="Entrer task" name="task" value={newtask} onChange={handlechangeInput} />
             <button className="add-button" onClick={handleaddTask}>Add</button>
             <ol>
               {TaskList.map((task,index)=>
                   <li key={index}>
                    <span className="Text">{task}</span>
                    <button className="delete-button" onClick={handledeleteTask}>Delete</button>
                    <button className="move-button">Up</button>
                    <button className="move-button">Down</button>
                   </li>
               )
               
               }
             </ol>
           </form>
        </div>
    )
}

export default TaskForm;