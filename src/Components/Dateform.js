/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useContext } from 'react';
import { useForm } from "react-hook-form";
import { dataContext } from "../Contexts/dataContext"
import { navigate } from "@reach/router";
import Themebutton from "../Components/Themebutton";


  
const Dateform = ({ buttimage, themeprop, props }) => {

  const dateformstyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 10px solid #184d6c;
  background-color: lightblue;
  font-size: 2rem;
  
  
  
  
  `;

const newbutton = css`

border: 10px solid #3a799d;
background-color: #4c93bc;
padding: 0.5rem;
margin: 0.5rem;
font-size:2rem;
border-radius:20rem;


`;

const inputstyle = css`
 font-size: 1.3rem;
 margin: 0.5rem;
 padding: 0.5rem;
 max-width: 30rem;
min-width: 14rem;

`;

const buttonwrapper = css`
display: flex;
flex-direction: row;
width:18rem;
overflow:scroll;
overflow-x:hidden;
overflow-y:hidden;
padding: 0.5rem;
`;


    
    
    const style = css`
    border: 40px solid deeppink;
    width: 400px;
    height: 400px;
    background-color:lightblue; 
    margin: 0.5rem;
    font-size: 1rem;
    
    `;




  
 /* const {setNumdays}=useContext(dataContext);
  const {setNumhours}=useContext(dataContext);
  const {setNumminutes}=useContext(dataContext);
  const {setNumseconds}=useContext(dataContext);*/
  const {textstring}=useContext(dataContext);
  const {setTextstring}=useContext(dataContext);
  const {currentDate}=useContext(dataContext);
  const {diffSeconds}=useContext(dataContext);
  const {futureDate}=useContext(dataContext);
  /*const {dagsdato}=useContext(dataContext);
  const {setCurrentDate}=useContext(dataContext);
  const {setDiffSeconds}=useContext(dataContext);*/
  const {setFutureDate}=useContext(dataContext);
  /*const {setDagsdato}=useContext(dataContext);*/
 


 

  useEffect(()=>{

    let magicDate = localStorage.getItem('myValueInLocalStorage');
    let magicText = localStorage.getItem('mytextInLocalStorage');
    //console.log(magicDate);
    //console.log(magicText);
    setFutureDate(magicDate);
    setTextstring(magicText)

  }, [setFutureDate,setTextstring ])
  
  
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
      
      console.log (data.dato, data.hours, data.aftertext)
    const datestring = data.dato + "T" + data.hours;
    
    setTextstring (data.aftertext)
    
    console.log(datestring);
    //console.log(textstring);
    //console.log (themeprop)
      var myDate = new Date(datestring); 
      var myEpoch = myDate.getTime();
      
      
        localStorage.setItem('myValueInLocalStorage', myEpoch)
        localStorage.setItem('mytextInLocalStorage', data.aftertext);
        
        console.log (myEpoch);
        //console.log (textstring);
        setFutureDate(new Date (myEpoch))
        
        console.log ("future date from context: ",futureDate)
        //console.log (currentDate)
        //console.log (diffSeconds + "forskellen mellem senere og nu")

        
  
       
         

       
        
       


     
        
     
         
                  
        

      
    
    
    };

  
  //Tjek hvad der er tastet ind
    //console.log(watch("dato"));
    //console.log(watch("hours"));
    //console.log(watch("aftertext"));
    
  
 

//let DATEX =  localStorage.getItem('myValueInLocalStorage');

//console.log (DATEX)



//console.log (currentDate)

function handleClick(e) {

  const date2 = new Date();
  date2.setMinutes( date2.getMinutes() + 30 );

  let Poch = new Date().getTime()
  let num = 60000
  let Poch2 = Poch+num
 

let testting = futureDate > Poch2

testting ?  navigate("/displayview") : <h1>NEJ</h1>

   
      

  
  
}


    return (
        <section>
    <form css={dateformstyle} onSubmit={handleSubmit(onSubmit)}>
    
    <label  htmlFor="number">Vælg dato og tid</label>
      
     
     
      <input css={inputstyle}type='date' name="dato"  ref={register({ required: true })} />
      <input css={inputstyle}type='time' step="1" name="hours"  ref={register({ required: true })} />
      <input css={inputstyle}type='text' placeholder="Skriv noget ... f.eks. 'til jul'"name="aftertext"  ref={register({ required: true })} />
    
      
      
      
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input css={newbutton} type="submit" value="Gør det!" onClick={handleClick} />
      <input css={newbutton} type="reset" value="Nulstil" />
      <div css={buttonwrapper}>
<Themebutton  buttimage="xmasSmall" themeprop="christmas"/>
<Themebutton  buttimage="birthdaySmall" themeprop="birthday"/>
<Themebutton  buttimage="holidaySmall" themeprop="holiday"/>

</div>
    </form>
    
    
    
    
    
</section>

      );
}
 
export default Dateform;

