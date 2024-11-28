import React, { useState } from "react";
import tasklist from "./TaskList";
import './TaskForm.css';
function TaskForm(){
    const [tasks,setTasks]=useState(tasklist);
    const[newtask,setNewtask]=useState("");
   
    //FONCTION POUR changer la valeur de input 
    const handlechangeInput=(event)=>{
       setNewtask(event.target.value);
       
    }
//FONCTION POUR AJOUTER UNE TACHE
const handleaddTask=()=>{
  setTasks([...tasks,newtask]);
  console.log(setTasks);
}
//FONCTION POUR supprimer UNE TACHE
const handledeleteTask=(index)=>{
    const Updatedtask=tasks.filter((_,i) =>i!== index);
    setTasks(Updatedtask)
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
             <input type="text" placeholder="Entrer tasks" name="tasks" value={newtask} onChange={handlechangeInput} />
             <button className="add-button" onClick={handleaddTask}>Add</button>
             <ol>
               {tasks.map((tasks,index)=>
                   <li key={index}>
                    <span className="Text">{tasks}</span>
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