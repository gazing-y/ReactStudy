import React from "react";
import List from "./components/List"
import Footer from "./components/Footer";
import Header from "./components/Header"
import "./index.css"

export default class App extends React.Component{
    // 状态在哪里，操作状态的方法就在哪里

    // 初始化状态
    state = {
        todos:[
            {id:'01',name:'xx',done:true},
            {id:'02',name:'yy',done:false},
            {id:'03',name:'zz',done:true},
        ]
    }
    // addTodo 用于添加一个todo,接收的参数是todo对象
    addTodo= (todoObj)=>{
        // console.log("Header data to App",todoObj);
        const {todos}= this.state
        // 追加一个todo
        const newTodo = [todoObj,...todos]
        // 更新状态
        this.setState({todos:newTodo})
    }
    
    updateTodo=(id,done)=>{
        const {todos} = this.state
        //匹配处理数据
        const newTodos= todos.map((todoObj)=>{
            if(id === todoObj.id) return {...todoObj,done}
            else return todoObj
        })
        // 更新状态
        this.setState({todos:newTodos})
    }
    
    deleteTodo=(id)=>{
        const {todos} = this.state
        const newTodos= todos.filter((todoObj)=>{
            return todoObj.id !== id
        })
        // 更新状态
        this.setState({todos:newTodos})
    }
    deleteDone=()=>{
        const {todos} = this.state
        const newTodos= todos.filter((todoObj)=>{
            return todoObj.done === false
        })
        // 更新状态
        this.setState({todos:newTodos})
    }
    allChecked=(done)=>{
        const {todos} = this.state
        const newTodos= todos.map((todoObj)=>{
            return {...todoObj,done}
        })
        // 更新状态
        this.setState({todos:newTodos})
    }
    render(){
        const {todos} = this.state
        return(
            <main>
            <Header addTodo={this.addTodo}/>
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo= {this.deleteTodo}/>
            <Footer todos={todos} deleteDone={this.deleteDone} allChecked={this.allChecked}/>
            </main>
        )
        
    }
}