/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {  useEffect, useContext} from 'react';
import { dataContext } from "../Contexts/dataContext";
import { navigate } from "@reach/router";

const Timedisplay = () => {
    const {numdays, setNumdays}=useContext(dataContext)
    const {numhours, setNumhours}=useContext(dataContext)
    const {numminutes, setNumminutes }=useContext(dataContext)
    const {numseconds, setNumseconds}=useContext(dataContext)
    const {textstring, setTextstring}=useContext(dataContext)
    const {diffSeconds, setFutureDate,futureDate,setDiffSeconds,currentDate,setCurrentDate,}=useContext(dataContext)

    
   setFutureDate(localStorage.getItem("myValueInLocalStorage"));
   setTextstring(localStorage.getItem("mytextInLocalStorage"));

    useEffect(() => {
        const timer = setTimeout(() => {
          setCurrentDate(Date.now());
          setDiffSeconds((futureDate - currentDate)/1000)
      
          setNumdays( Math.floor(diffSeconds / 86400));
      
          setNumhours ( Math.floor((diffSeconds % 86400) / 3600));
      
         setNumminutes(Math.floor(((diffSeconds % 86400) % 3600) / 60));
      
          setNumseconds(Math.floor ((diffSeconds % 86400) % 3600) % 60);
      
      
      
      
      
        }, 1000);
       ;
      }, [ currentDate, setNumseconds, setCurrentDate, setDiffSeconds, setNumdays, setNumhours, setNumminutes, diffSeconds, futureDate]);


      function handleClick(e) {
       
        console.log('The link was clicked.');
        navigate("/");
      }
    return ( 
<section>
        <h1>{numdays}  dage   {numhours}  timer   {numminutes}   minutter   {numseconds}  sekunder {textstring} </h1>

       
        <button onClick={handleClick} >Start en anden nedtælling</button>
        </section>
     );
}
 
export default Timedisplay;