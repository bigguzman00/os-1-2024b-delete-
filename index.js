import { greeting as childprocesses} from "./projects/child-processes.js"; 
import { greeting as ipc} from "./projects/ipc.js"; 
import { greeting as processesstate } from "./projects/processes-state.js"; 
console.log("🧵 PROGRAMA DE PROCESOS 🧵 ");   
let option = process.argv[2];
switch (option){
    case "1": 
           childprocesses();
    break; 

    case "2": 
           ipc();
    break; 
    
    case "3": 
           processesstate();
    break; 
default:
    console.log("opcion invalida");  
} 







//greetingchild();
//greetingipc(); 
//greetinprocessesstate();   
