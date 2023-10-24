import './App.css';
import {useState} from "react";
export default function TodoListAPP() {
   const [task, setTask]=useState({
      value:'',
      terminer:false
   })
   const  [tasks, setTasks]=useState([])
   const  [rechercher, setRechercher]=useState('')
   const handleinput=(e)=>{
       setTask((prev)=>{
        return{
            ...prev,
           value:e.target.value
        }
    })
   }
   const handlecheckbox=(e)=>{
       setTask((prev)=>{
           return{
               ...prev,
              terminer:e.target.checked
           }
       })
   }
   const deleteTask=(taskId)=>{
    // console.log("task id is",taskId)
    setTasks((prev)=>prev.filter(
      (_,index)=>index !==taskId
    ))
   }
   const handlestatecheckbox=(taskId)=>{
      const updatetask=[...tasks]
      updatetask[taskId].terminer =! updatetask[taskId].terminer
      setTasks(updatetask)
   }
   const handlerechercher=(ev)=>{
    setRechercher(ev.target.value)
   }
   const filterRchercher= tasks.filter((tache)=>
   tache.value.toLowerCase().includes(rechercher.toLocaleLowerCase()));
    

   const handleSubmit=(event)=>{
       event.preventDefault();
       setTasks([...tasks,task]); 
       setTask({ value: '', terminer: false });
   }
   return(
       <>
           <form onSubmit={handleSubmit}>
           <input type="text" name="rechercher" placeholder="Rechercher" value={rechercher} onChange={handlerechercher}/><br/>
               <input type="text" placeholder="Saisir votre tache" name="tache"  onChange={handleinput}/>
               <label><input type="checkbox" onChange={handlecheckbox}  />Terminer</label>
               <input type="submit" value="Ajouter" />
           </form>
           <h1>list des taches :</h1>
           { filterRchercher.map((task, taskId)=>{
                   return(
                       <>
                          <div  key={taskId}>
                            <label><input type="checkbox"  onClick={() => handlestatecheckbox(taskId)}  checked={task.terminer} />
                            <span >{task.value}</span>
                            </label>
                            <button onClick={() => deleteTask(taskId)}>Delete</button>
                            <br/> 
                          </div>
                          
                       </>
                   )
               })
               
           }
   <pre>{JSON.stringify(task,null,2)}</pre> 
   <pre>{JSON.stringify(tasks,null,2)}</pre>
       </>
   )
}
