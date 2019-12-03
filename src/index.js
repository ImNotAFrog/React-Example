import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch,Redirect,withRouter } from 'react-router-dom'
//引入/导入
import {Button,Icon,Upload,message,Input} from 'antd'
import HomePage from './HomePage/homePage'
import LoginPage from './Login/login';
import axios from 'axios';
import qs from 'qs';
class IndexPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            account:""
        }   
    }
    log=()=>{  
    }
    changeAccount=(e)=>{
        this.setState({
            account:e.target.value
        })
    }
    render() {
        const uploadProps={
            name: 'file',
            action: '/user/updateAvatar',
            headers:{
                'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MDIiLCJyb2xlIjpbeyJhdXRob3JpdHkiOiJST0xFX1RFQUNIRVIifV0sImNyZWF0ZWQiOjE1NzUyNTI2OTU3MzEsImV4cCI6MTU3NTg1NzQ5NX0.QYuWEFlQfO_DV-5biRLsaCFqSkV3hsrBTbQq-RFUB90IQVxS_tf_9V7wcl2F65E_OOO1VJ029AhdMW3srAWDaQ'
            },
            data:{
                account:this.state.account
            },
            onChange(info) {
              if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
              if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
              } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
            },
          }
        return (
            <div>
                <div>
                    不被路由管理的内容，广告
                </div>
                <BrowserRouter basename='react-example'>
                    <Switch>
                        <Route path="/homepage" component={HomePage}></Route>
                        <Route path="/login" component={LoginPage} history={this.props.history}></Route>
                        <Redirect to="/homepage"></Redirect>
                    </Switch>
                    <Input name="account" value={this.state.account} onChange={e=>this.changeAccount(e)}/>
                    <Upload {...uploadProps}>
                        <Button>
                        <Icon type="upload" /> 点击上传
                        </Button>
                    </Upload>,
                    <Button onClick={this.log}>按钮</Button>
                </BrowserRouter>
            </div>
        )
    }
}
export default withRouter(IndexPage)
ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
