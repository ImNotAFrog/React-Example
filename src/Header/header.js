import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {Button} from 'antd'
var HeaderCss = require('./header.css')

export default class DefaultHeader extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:window.localStorage.getItem("username")
        }
    }

    logout = e=>{
        window.localStorage.removeItem("username")
        window.localStorage.removeItem("token")
        this.setState({
            username:null
        })
    }

    render(){
        let userProfile=null;
        

        if(this.state.username!=null){
            userProfile=
            <div>
                <NavLink to="/profile">{this.state.username}</NavLink>
                <Button type="primary" onClick={this.logout}>登出</Button>
            </div>
            
        }else{
            userProfile=<NavLink to={{pathname:"/login",state:{message:"hello react"}}}>登陆</NavLink>
        }

        return(
            <div className={HeaderCss.header}>
                {/* <img src="/imgs/logo.png" alt=""/> */}
                <NavLink to="/homepage">XXXXXX系统</NavLink>
                {userProfile}
            </div>
        )
    }
}