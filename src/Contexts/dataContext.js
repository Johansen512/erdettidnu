import React, { createContext, useState } from "react";

export const dataContext = createContext();


const DataContextProvider = (props) => {
    const [numdays, setNumdays] = useState (null);
    const [numhours, setNumhours] = useState (null);
    const [numminutes, setNumminutes] = useState (null);
    const [numseconds, setNumseconds] = useState (null);
    const [textstring, setTextstring] = useState (null);
    const [currentDate, setCurrentDate] = useState (null);
    const [diffSeconds, setDiffSeconds] = useState (null);
    const [futureDate, setFutureDate] = useState (null); 
    //const [themepic, setThemepic] = useState (null); 

    

   

   
    return (<dataContext.Provider value={{ numdays, numhours, numminutes, numseconds, textstring, currentDate,  diffSeconds,  futureDate, setNumdays, setNumhours, setNumminutes, setNumseconds, setTextstring, setCurrentDate, setDiffSeconds, setFutureDate }}>

    {props.children}
    </dataContext.Provider>

    );
};
 
export default DataContextProvider;