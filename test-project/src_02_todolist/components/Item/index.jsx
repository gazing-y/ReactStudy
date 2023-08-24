import React from "react";
import "./index.css"

export default class Item extends React.Component{
    handleCheck=(id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
    }
    handleDelete=(id)=>{
        if(window.confirm("确定删除吗？")){
            this.props.deleteTodo(id)
        }
    }
    render(){
        const {id,name,done} = this.props
        return(
            <li>
                <div>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span> 
                </div>
                <button className="delbtn" onClick={()=>{this.handleDelete(id)}}>删除</button>
            </li>
        )
    }
}