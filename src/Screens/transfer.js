import logo from '../logo.svg';
// import './App.css';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button'
import TableRow from '../table';
import Layout from '../drawerContent/layout'
import { withRouter } from "react-router-dom";
import React,{Component} from 'react'
import axios from 'axios';


class transfer extends Component {
    constructor(){
        super()
        this.state={
            sid:'',
            rid:'',
            quant:'',
            errorMessage :''

        }
    }
    sendData=()=>{
        axios.post('http://3.227.84.96:10000/transfer',{
            sid : this.state.sid,
            rid : this.state.rid,
            quant :this.state.quant
        }).then((res)=>console.log('res',res.data)).catch((error)=>this.setState({errorMessage:'Network Error'}))
    }
    render(){
  return (
  <Layout>
   <h1 style={{fontSize:30,color:'#000',textAlign:"left"}}> transfer</h1>
     <div style={{width:'13%',height:2,backgroundColor:"#000"}}></div>
   <Input placeholder='sid' style={{display:'block',width:"40%"}} onChange={(event,i)=>this.setState({sid : event.target.value})}/>
   <Input placeholder='rid' style={{display:'block',width:"40%"}} onChange={(event,i)=>this.setState({rid : event.target.value})}/>
   <Input placeholder='quant' style={{display:'block',width:"40%"}} onChange={(event,i)=>this.setState({quant : event.target.value})}/>
   <Button variant="contained" color="primary" style={{alignSelf:"self-start",display:'block',margin :10,marginLeft:"15%"}} onClick={()=>this.sendData()}>
  Create
</Button>
<h2 style={{color:'red',fontSize:20}}>{this.state.errorMessage}</h2>

    </Layout>

  );
}}

export default withRouter(transfer);
