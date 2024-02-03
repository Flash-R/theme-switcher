import React,{useState} from "react";
import styleContext from "./styleContext";


const StyleProvider = (props) =>{

    const [theme, setTheme] = useState({
        color: "red",
        backgroundColor:"white",
        border:  "1px solid black"
    });

    return (
        <div>
            <styleContext.Provider value={{
                theme, 
                lightTheme: ()=>setTheme({...theme, color:"red",backgroundColor:"white",border: "1px solid  green"}),
                darkTheme:()=>setTheme({...theme,color:"white",backgroundColor:"black", border:  "2px solid red"}),
                }}>
                {props.children}
            </styleContext.Provider>
        </div>
    )
}

export default StyleProvider;