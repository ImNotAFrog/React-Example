import React from 'react'
import { Dropdown, Button ,Menu} from 'antd'
export default class LoginPage extends React.Component {

    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
    }
    changeValue = e=>{  
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    login = e=>{
        //去访问服务器，登陆成功
        if(this.state.username==='123'&&this.state.password==='123'){
            alert('登陆成功');
            window.localStorage.setItem("username","123");
            window.localStorage.setItem("token","11111");

            //跳转首页
            this.props.history.push({pathname:'/homepage',state:{message:"hello world"}})
        }else{
            alert('登陆失败');
        }      
        
    }
    render() {
        // console.log(this.props.location.state.message)
        
        console.log(this.props)
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        1st menu item
                </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                        2nd menu item
                </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                        3rd menu item
                </a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div>
                <h3>登陆页面</h3>
                <p>用户名</p>
                <input type="text" name="username" id="username" value={this.state.username} onChange={this.changeValue}/>
                <p>密码</p>
                <input type="pwd" name="password" id="password" value={this.state.password} onChange={this.changeValue}/>
                <button onClick={this.login} >登陆</button>
                <Dropdown overlay={menu} placement="bottomRight">
                    <Button>下拉框</Button>
                </Dropdown>
            </div>
        )
    }
}