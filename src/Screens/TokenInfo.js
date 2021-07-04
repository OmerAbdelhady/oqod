import logo from '../logo.svg';
// import './App.css';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button'
import TableRow from '../table';
import Layout from '../drawerContent/layout'
import { withRouter } from "react-router-dom";
import React,{Component} from 'react'
import axios from 'axios';


class Token_Info extends Component {
    constructor(){
        super()
        this.state={
            Id :''
        }
    }

    SendData=()=>{ 
        axios.post('https://cors-anywhere.herokuapp.com/http://3.227.84.96:10000/GettokenByID',{
        ID :this.state.Id,
         }).then((res)=>console.log('res',res.data)).catch((error)=>console.log('error',error.response.data))
     }
    render(){
  return (
  <Layout>
   <h1 style={{fontSize:30,color:'#000',textAlign:"left"}}> Get Token</h1>
     <div style={{width:'13%',height:2,backgroundColor:"#000"}}></div>
   <Input placeholder='Id' style={{display:'block',width:"40%"}} onChange={(event,i)=>this.setState({Id : event.target.value})}/>
   <Button onClick={()=>this.SendData()} variant="contained" color="primary" style={{alignSelf:"self-start",display:'block',margin :10,marginLeft:"15%"}} >
  Get Token
</Button>
    </Layout>

  );
}}

export default withRouter(Token_Info);
