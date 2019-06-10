import React from "react";
import click from "../assets/js/logic";
// import Main from "../components/Main"


const Form = (props) => {
    return(
        <button className = "pics btn btn-secondary">
            <img 
                id = {props.data.id} 
                alt = {props.data.id} 
                src = {props.data.img} 
                onClick = {
                    (event) => {
                        event.preventDefault();
                        
                        click.check(parseInt(props.data.id));
                        props.onClick(event)
                    }
                } 
            />
        </button>
    )
}

export default Form;