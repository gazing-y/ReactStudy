import React from "react";
import "./index.css"

export default class Item extends React.Component{
    handleCheck=(id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
    }
    render(){
        const {id,name,done} = this.props
        return(
            <li>
                <div>
                    <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span> 
                </div>
                <button className="delbtn">删除</button>
            </li>
        )
    }
}