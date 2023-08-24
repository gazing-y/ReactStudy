import React from "react";
import axios from 'axios'

export default class App extends React.Component{
    getStudentData=()=>{
        axios.get().then(
            response=>{
                console.log("success",response.data)
            },
            error=>{
                console.log("error",error);
            }
        )
    }
    render(){
        return(
            <>
            <button onClick={this.getStudentData}>获取数据</button>
            </>
        )
    }
}