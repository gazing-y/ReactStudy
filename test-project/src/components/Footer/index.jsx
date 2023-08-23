import React from "react";
import "./index.css"

export default class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className="check">
                    <input type="checkbox"/>
                    <p>已完成 <span className="finish">0</span>/全部 <span className="total">2</span></p>
                </div>
                <button>清除已完成任务</button>
            </footer>
        )
    }
}