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
                lightTheme: ()=>setTheme({...theme, color:"black",backgroundColor:"white",border: "1px solid  grey"}),
                darkTheme:()=>setTheme({...theme,color:"red",backgroundColor:"black", border:  "2px dashed red"}),
                }}>
                {props.children}
            </styleContext.Provider>
        </div>
    )
}

export default StyleProvider;