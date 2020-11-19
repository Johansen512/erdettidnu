/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {  useEffect, useContext} from 'react';
import { dataContext } from "../Contexts/dataContext";
import { navigate } from "@reach/router";

const Timedisplay = ({themeprop, prop}) => {

  const timedisplaystyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  font-size: 2rem;
  background-image: url(../img/${themeprop}.jpg);
  overflow: hidden;
  background-repeat: no-repeat;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 10px solid #184d6c;
  
  `;

const newbutton = css`
max-width: 30rem;  
background-color: #4c93bc;
border: 10px solid #3a799d;
padding: 0.5rem;
margin: 0.5rem;
margin-bottom:30rem;
font-size:2rem;
border-radius:20rem;
box-shadow:2px 2px 5px #05334e;
`;

const pstyle = css`

border: 10px solid #3a799d;
background-color: #ffffff;
padding: 0.5rem;
margin: 0.5rem;
font-size:2rem;
max-width: 30rem;
min-width: 14rem;

`;




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
<section css={timedisplaystyle}>
        <p css={pstyle}>{numdays}  dage</p><p css={pstyle}>{numhours}  timer</p><p css={pstyle}>{numminutes}   minutter</p><p css={pstyle}> {numseconds}  sekunder</p><p css={pstyle}>{textstring}</p>

       
        <button css={newbutton} onClick={handleClick} >Start en ny nedtælling</button>
        </section>
     );
}
 
export default Timedisplay;