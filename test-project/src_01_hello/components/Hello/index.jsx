import React from "react";
import hello from './index.module.css'

export default class Hello extends React.Component{
    
    render(){
        return(
            <h1 className={hello.title}>Hello React !!!</h1>
        )
    }
}