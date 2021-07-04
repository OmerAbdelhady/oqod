import logo from '../logo.svg';
// import './App.css';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button'
import TableRow from '../table';
import Layout from '../drawerContent/layout'
import { withRouter } from "react-router-dom";
import React,{Component} from 'react'
import axios from 'axios';



class Token extends Component {
    constructor(){
        super()
        this.state={
            id:'',
            owner:'',
            type:'',
            quantity:''
        }
    }
    SendData=()=>{
       axios.post('http://3.227.84.96:10000/CreatToken',{
        id :this.state.id,
        owner  : this.state.owner,
        type  :this.state.type,
        quantity: this.state.quantity 
        }).then((res)=>console.log('res',res.data)).catch((error)=>console.log('error',error))
    }
    render(){
    return (
  <Layout>
   <h1 style={{fontSize:30,color:'#000',textAlign:"left"}}> CreateToken</h1>
     <div style={{width:'13%',height:2,backgroundColor:"#000"}}></div>
   <Input placeholder='id' style={{display:'block',width:"40%"}} onChange={(event,i)=>this.setState({id : event.target.value})}/>
   <Input placeholder='owner' style={{display:'block',width:"40%"}} onChange={(event,i)=>this.setState({owner : event.target.value})}/>
   <Input placeholder='type' style={{display:'block',width:"40%"}} onChange={(event,i)=>this.setState({type : event.target.value})}/>
   <Input placeholder='quantity' style={{display:'block',width:"40%"}} onChange={(event,i)=>this.setState({quantity : event.target.value})}/>
<Button variant="contained" color="primary" style={{alignSelf:"self-start",display:'block',margin :10,marginLeft:'15%'}} onClick={()=>this.SendData()}>
  Create
</Button>
    </Layout>

  );
    }
}

export default withRouter(Token);
