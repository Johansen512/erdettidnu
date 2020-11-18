/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect, useContext } from 'react';
import { useForm } from "react-hook-form";
import { dataContext } from "../Contexts/dataContext"
import { navigate } from "@reach/router";

  
const Dateform = (test) => {
  const {setNumdays}=useContext(dataContext);
  const {setNumhours}=useContext(dataContext);
  const {setNumminutes}=useContext(dataContext);
  const {setNumseconds}=useContext(dataContext);
  const {textstring}=useContext(dataContext);
  const {setTextstring}=useContext(dataContext);
  const {currentDate}=useContext(dataContext);
  const {diffSeconds}=useContext(dataContext);
  const {futureDate}=useContext(dataContext);
  const {dagsdato}=useContext(dataContext);
  const {setCurrentDate}=useContext(dataContext);
  const {setDiffSeconds}=useContext(dataContext);
  const {setFutureDate}=useContext(dataContext);
  const {setDagsdato}=useContext(dataContext);

 

  useEffect(()=>{

    let magicDate = localStorage.getItem('myValueInLocalStorage');
    let magicText = localStorage.getItem('mytextInLocalStorage');
    console.log(magicDate);
    console.log(magicText);
    setFutureDate(magicDate);
    setTextstring(magicText)

  }, [setFutureDate,setTextstring ])
  
  
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
      
      console.log (data.dato, data.hours, data.aftertext)
    const datestring = data.dato + "T" + data.hours;
    
    setTextstring (data.aftertext)
    console.log(datestring);
    console.log(textstring);
      var myDate = new Date(datestring); 
      var myEpoch = myDate.getTime();
      console.log (myEpoch);
        localStorage.setItem('myValueInLocalStorage', myEpoch)
        localStorage.setItem('mytextInLocalStorage', data.aftertext);
        console.log (myEpoch);
        console.log (textstring);
        setFutureDate(new Date (myEpoch))
        
        console.log ("future date from context: ",futureDate)
        

        

        console.log (currentDate)

       

        console.log (diffSeconds + "forskellen mellem senere og nu")

        
  
       
         

       
        
       


     
        
     
         
                  
        

      
    
    
    };

  
  //Tjek hvad der er tastet ind
    //console.log(watch("dato"));
    //console.log(watch("hours"));
    //console.log(watch("aftertext"));
    
  
 const labelstyle = css`

 
 `;

const inputstyle = css`
 width: 300px;
 font-size: 1rem;
 
`;
    
    
    const style = css`
    border: 40px solid deeppink;
    width: 400px;
    height: 400px;
    background-color:lightblue; 
    margin: 0.5rem;
    font-size: 1rem;
    
    `;

//let DATEX =  localStorage.getItem('myValueInLocalStorage');

//console.log (DATEX)



//console.log (currentDate)

function handleClick(e) {
       
  console.log('The link was REALLY clicked.');
  navigate("/displayview");
}

    return (
        <section>
    <form css={style} onSubmit={handleSubmit(onSubmit)}>
    
    <label css={labelstyle } htmlFor="number">Vælg dato og tid</label>
      
     
     
      <input css={inputstyle}type='date' name="dato" ref={register({ required: true })} />
      <input css={inputstyle}type='time' step="1" name="hours"  ref={register({ required: true })} />
      <input css={inputstyle}type='text' placeholder="Skriv noget ... f.eks. 'til juleaften'"name="aftertext"  ref={register({ required: true })} />
    
      
      
      
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" value="Gør det!" onClick={handleClick} />
      <input type="reset" value="Nulstil" />
    </form>

    
    
    
    
    
    
</section>

      );
}
 
export default Dateform;

