import './style.css'
 import { useState } from "react";

 let [milisegundos] = [0]
 
const [] = useState ("00:00:00:0000")

export default function Cronometro (){
    
    milisegundos += 10
    if (milisegundos >=1000){
        segundos += 1;
        milisegundos = 0
}
// if (segundos >= 60){
//     minutos += 1;
//     segundos = 0
// }
// if (minutos >=60){
//     horas += 1;
//     minutos = 0
// }
     return (
        <div className="Cronometro">{Cronometro}</div>

   )}
    

    function start (){

            }
    // function stop () {}
    // function restart () {}
return (
    <div className='Cronometro'>
        <div className='display'>
            <span className='timerCell'> {TimeRanges.milisegundos}</span>
        </div>
<input type = 'button' value= "start" onClick={start}/>
    </div>
)    

