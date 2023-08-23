import React from "react";
import Item from "../Item";
import './index.css';

export default class List extends React.Component{
    render(){
        const {todos,updateTodo} = this.props
        return(
            <ul className="list">
                {
                    todos.map((todo)=>{
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} />
                    })
                }
            </ul>
        )
    }
}