import React from "react";
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import "./index.css"

export default class Footer extends React.Component{
    // 对接收的props 进行：类型、必要性的限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }
    handleKeyUp = (event)=> {
        // 解构赋值
        const {keyCode,target} = event
        // 判断是否回车
        if(keyCode !== 13) return
        // 判断添加不为空
        if(target.value.trim()  === ""){
            alert("输入不能为空！！")
            return
        }
        // 准备好一个todo对象
        const todoObj = {id:nanoid(),name:target.value,done:false}
        // 将todo对象传递给App
        this.props.addTodo(todoObj)
        // 清空
        target.value=''
    }
    render(){
        return(
            <header>
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入您需要添加的内容，Enter添加" />
            </header>
        )
    }
}