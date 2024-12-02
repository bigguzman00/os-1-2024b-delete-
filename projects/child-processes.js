/*
investigar para que sirve 
spawn 
exec
fork 
*/
import {spawn, exec, fork } from  'child_process'  
 
 export function chilprocesses(){
    console.log("=== creacion de procesos hijo===");
    console.log("📢creando un child processes");  
    const childprocesses = spawn('ls', ['-l'])    


// manejando eventos en el child process
childprocesses.stdout.on('data',(data) => { 
    console.log(`🖊️ output:${data}`)  
 } );

//manejando errores 
childprocesses.stderr.on('data', (data) => {
    console.log(`🚨 output: ${data}`)
}); 




//evento close 
childprocesses.on('close', (code) => {
    console.log(`➡️ proceso terminado con el codigo  ${code}`)
}); 

 } 
