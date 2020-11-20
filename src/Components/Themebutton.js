/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect, useContext } from 'react';
import { useForm } from "react-hook-form";
import { dataContext } from "../Contexts/dataContext"
import { navigate } from "@reach/router";

const Themebutton= ({buttimage, themeprop}) => {

    const themebutton = css`

background-image:url(../img/${buttimage}.jpg);
font-size: 1.3rem;
 margin: 0.5rem;
 padding: 0.5rem;
 width: 5rem;
 height: 5rem;
 border: 1px solid #3a799d;
background-color: #4c93bc;
overflow:hidden;
padding: 0.5rem;
margin: 0.5rem;
border-radius:50%;

`;


function handleTheme(e) {
       
    console.log(buttimage);

    console.log(themeprop);
    localStorage.setItem('mybackInLocalStorage', themeprop)
  }

    return ( 

<div>
    <button css={themebutton} onClick={handleTheme}/>
    </div>
    

     );
}
 
export default Themebutton;