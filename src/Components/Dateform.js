/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";


  
const Dateform = (test) => {
  const [numdays, setNumdays] = useState (null);
  const [numhours, setNumhours] = useState (null);
  const [numminutes, setNumminutes] = useState (null);
  const [numseconds, setNumseconds] = useState (null);
  const [currentDate, setCurrentDate] = useState (null);
  const [diffSeconds, setDiffSeconds] = useState (null);
  const [futureDate, setFutureDate] = useState (null);
  const [textstring, setTextstring] = useState (null);

  useEffect(()=>{

    let magicDate = localStorage.getItem('myValueInLocalStorage');
    let magicText = localStorage.getItem('mytextInLocalStorage');
    console.log(magicDate);
    console.log(magicText);
    setFutureDate(magicDate);
    setTextstring(magicText)

  }, [])
  
  
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {console.log (data.dato, data.hours, data.aftertext)
    const datestring = data.dato + "T" + data.hours;
    
    setTextstring (data.aftertext)
    console.log(datestring);
    console.log(textstring);
      var myDate = new Date(datestring); 
      var myEpoch = myDate.getTime();
      console.log (myEpoch);
        localStorage.setItem('myValueInLocalStorage', myEpoch)
        localStorage.setItem('mytextInLocalStorage', textstring);
        console.log (myEpoch);

        setFutureDate(new Date (myEpoch))

        console.log (futureDate)

        

        console.log (currentDate)

       

        console.log (diffSeconds + "forskellen mellem senere og nu")

        
  
       
         

       
        
       


     
        
     
         
                  
        

      
    
    
    };

  
  
    console.log(watch("dato"));
    console.log(watch("hours"));
    console.log(watch("aftertext"));
    
  
 const labelstyle = css`

 
 `;

const inputstyle = css`
 width: 200px;
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

let DATEX =  localStorage.getItem('myValueInLocalStorage');

console.log (DATEX)

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
}, [currentDate]);

console.log (currentDate)



    return (
        <section>
    <form css={style} onSubmit={handleSubmit(onSubmit)}>
    
    <label css={labelstyle } htmlFor="number">Vælg dato og tid</label>
      
     
     
      <input css={inputstyle}type='date' name="dato"  ref={register({ required: true })} />
      <input css={inputstyle}type='time' step="1" name="hours"  ref={register({ required: true })} />
      <input css={inputstyle}type='text' name="aftertext"  ref={register({ required: true })} />
    
      
      
      
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit"  />
    </form>
    <h1>{numdays}  dage   {numhours}  timer   {numminutes}   minutter   {numseconds}  sekunder {textstring} </h1>
    
    
    
    
</section>

      );
}
 
export default Dateform;

