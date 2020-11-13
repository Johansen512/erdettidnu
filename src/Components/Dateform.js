/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react';
import { useForm } from "react-hook-form";


  
const Dateform = (test) => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {console.log (data.dato, data.hours)
    const datestring = data.dato + "T" + data.hours;
    console.log(datestring);
      var myDate = new Date(datestring); 
      var myEpoch = myDate.getTime()/1000.0;
      console.log (myEpoch);

     

      
    
    
    };
  
    console.log(watch("dato"));
    console.log(watch("hours"));


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
    return (
        <section>
    <form css={style} onSubmit={handleSubmit(onSubmit)}>
    
    <label css={labelstyle }for="number">Vælg dato og tid</label>
      
     
     
      <input css={inputstyle}type='date' name="dato"  ref={register({ required: true })} />
      <input css={inputstyle}type='time' step="1" name="hours"  ref={register({ required: true })} />
    
      
      
      
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>

    
</section>

      );
}
 
export default Dateform;