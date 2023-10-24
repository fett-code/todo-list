// import {useState} from "react";
// export default function TodoListAPP() {
//     const [tache, setTache]=useState({
//         checked: false,
//         value: ''
//     });
//     const [tasks, setTasks] = useState([]);
//     console.log(tasks);
//     let handelinput =(ev)=>{
//         setTache(prev => {
//             return {
//                 ...prev,
//                 value: ev.target.value
//             }
//         });
        
//     }
//     const handleCheckbox = (e) => {
//         setTache(prev => {
//             return {
//                 ...prev,
//                 checked: e.target.checked
//             }
//         })
//     }
//     let handleSubmit =(event)=>{
//         event.preventDefault();
//         setTasks([...tasks,tache]); 

//     }
   
//      const renderTasks = () => {
//         return tasks.map((element, index) => (
//             <>
//                 <div key={index}>
//                     <label><input type="checkbox" checked={element?.checked}/>{element.value}</label><br/>
//                 </div>              
//             </>
//         )); 
//     }
//     return( 
//         <>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="Saisir votre tache" name="tache" onChange={handelinput} value={tache.value}/>
//                 <label><input type="checkbox" onChange={handleCheckbox} checked={tache.checked}  />Terminer</label>
//                 <input type="submit" value="Ajouter" />
//             </form>
//             {renderTasks()}
//         </>
//     )
// }
// =============================================================================
 import {useState} from "react";
 export default function TodoListAPP() {
    const [task, setTask]=useState({
        value:'',
        terminer:false
    })
    const  [tasks, setTasks]=useState([])
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
                checked:e.target.checked
            }
        })
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setTasks([...tasks,task]);
        setTask({
            value: '',
            terminer: false
        });
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="rechercher" placeholder="Rechercher" />
                <input type="text" placeholder="Saisir votre tache" name="tache"  onChange={handleinput}/>

                <label><input type="checkbox" onChange={handlecheckbox}  />Terminer</label>
                <input type="submit" value="Ajouter" />
            </form>
            <h1>list des taches :</h1>
            { tasks.map((element)=>{
                    return(
                        <>
                            <label><input type="checkbox" onChange={handlecheckbox} checked={element.checked}/>{element.value}</label><br/> 
                        </>
                    )
                })
                
            }

        </>
    )
 }
