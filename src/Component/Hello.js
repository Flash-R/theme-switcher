import React,{useContext} from  'react';
import StyleContext from "../context/styleContext";

const Hello = ()=>{

    const {theme,setTheme} = useContext(StyleContext);
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
            <button onClick={
                () => setTheme({
                    color:"white",
                    backgroundColor:"black",
                    border:`3px solid green`
                })
            }>Switch to dark</button>
        </div>
    )
}
export default Hello;