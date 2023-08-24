import React from "react";
import "./index.css"

export default class Footer extends React.Component{
    deleteDone = ()=>{
        this.props.deleteDone()
    }
    allChecked=(event)=>{
        this.props.allChecked(event.target.checked)
    }
    render(){
        const {todos} = this.props

        // 已完成个数
        const doneCount = todos.reduce((pre,todo)=>{
            return pre + (todo.done?1:0)
        },0)

        return(
            <footer>
                <div className="check">
                    <input type="checkbox" onChange={this.allChecked} checked={(doneCount === todos.length && todos.length )?true:false}/>
                    <p>已完成 <span className="finish">{doneCount}</span>/全部 <span className="total">{todos.length}</span></p>
                </div>
                <button onClick={this.deleteDone}>清除已完成任务</button>
            </footer>
        )
    }
}