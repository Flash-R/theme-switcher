import React,{useContext,useState,useEffect} from  'react';
import StyleContext from "../context/styleContext";

const Hello = ()=>{

    const {theme,lightTheme, darkTheme} = useContext(StyleContext);
    const [isDark, setIsDark] = useState(false);

    useEffect(()=>{
        let currentTheme = localStorage.getItem("isDark");
        setIsDark(currentTheme == "true" ? true : false);
        if(currentTheme == "false"){
            lightTheme();
        }else{
            darkTheme()
        }
    },[])

    function switchTheme(){
        if(!isDark){
            darkTheme();
        }else{
            lightTheme();
        }
        let currentTheme =  !isDark
        setIsDark(currentTheme)
        localStorage.setItem("isDark",currentTheme);
    }
    return(
        <div>
            <div style={{
                color: theme.color,
                backgroundColor: theme.backgroundColor,
                border: theme.border
            }}>
                <h1>Hello World!</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                    a galley of type and scrambled it to make a type specimen book. It has survived not only 
                    five centuries, but also the leap into electronic typesetting, remaining essentially 
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                </p>
                <ol>
                    <li>Item One</li>
                    <li>Item Two</li>
                    <li>Item Three (a longer item for demonstration)</li>
                </ol>
            </div>
            <button onClick={switchTheme}>Switch theme</button>
            {/* <button onClick={darkTheme }>Switch to dark</button>
            <button onClick={lightTheme }>Switch to Light</button> */}
        </div>
    )
}
export default Hello;