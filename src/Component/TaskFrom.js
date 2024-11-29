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
const handleaddTask=(e)=>{
  e.preventDefault();
  setTasks([...tasks,newtask]);
  setNewtask("");
  console.log(setTasks);
}
//FONCTION POUR supprimer UNE TACHE
const handledeleteTask=(index)=>{
    const Updatedtask=tasks.filter((_,i) =>i!== index);
    setTasks(Updatedtask);
}


//FONCTION POUR ranger mes par ordre decroissant TACHE
const handlemoveTaskup=(index)=>{
  if(index>0){
    const updateTasks=[...tasks];
    [updateTasks[index],updateTasks[index-1]]=
    [updateTasks[index-1],updateTasks[index]];
    setTasks(updateTasks)
  }

}
//FONCTION POUR AJOUTER UNE TACHE
const handlemoveTaskdown=(index)=>{
  
  if(index <tasks.length){
    const updateTasks=[...tasks];
    [updateTasks[index],updateTasks[index+1]]=
    [updateTasks[index+1],updateTasks[index]];
    setTasks(updateTasks)
  }
}

    return(
        <div className="contenair">
           <div className="TO-DO-LIST">
           <h1>
            TO DO LIST
           </h1>
           </div>
           <form onSubmit={handleaddTask}>
             <input type="text" placeholder="Entrer tasks" name="tasks" value={newtask} onChange={handlechangeInput} required/>
             <button className="add-button" type="submit">Add</button>
           </form>
           <ol>
               {tasks.map((task,index)=>
                   <li key={index}>
                    <span className="Text">{task}</span>
                    <button className="delete-button" onClick={ ()=> handledeleteTask(index)}>Delete</button>
                    <button className="move-button" onClick={()=>handlemoveTaskup(index)}>Up</button>
                    <button className="move-button" onClick={()=> handlemoveTaskdown(index)}>Down</button>
                   </li>
               )
               
               }
             </ol>
        </div>
    )
}

export default TaskForm;