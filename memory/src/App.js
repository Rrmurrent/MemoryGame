    
import React from "react"
import NavBar from "./components/NavBar"
import Main from "./components/Main"
import Background from "./assets/images/trianglify.png"

const background = {
    width: "100%",
    height: "100%",
    backgroundImage: "url(" + Background + ")",
    backgroundAttachment : "fixed"


}

const App = () => {
  
    return(
        <div style = {background}>

            <NavBar />
            <Main />

        </div>
    )
};

export default App;