import React from "react";
import PropTypes from 'prop-types'
import Item from "../Item";
import './index.css';

export default class List extends React.Component{
    static propTypes = {
        todos:PropTypes.array.isRequired,
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }
    render(){
        const {todos,updateTodo,deleteTodo} = this.props
        return(
            <ul className="list">
                {
                    todos.map((todo)=>{
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo}  deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        )
    }
}