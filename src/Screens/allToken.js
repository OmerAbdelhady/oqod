import logo from '../logo.svg';
// import './App.css';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button'
import TableRow from '../table';
import Layout from '../drawerContent/layout'
import Axios from 'axios'
import React,{Component} from 'react'
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state={
      data:[]
    }
  }

  componentDidMount(){
    axios.get('http://3.227.84.96:10000/returnAllToken',{}).then((res)=>this.setState({data : res?.data})).catch((error)=>console.log('error',error))
  }
  render(){
  
  
  return (
  <Layout>
    <div className="App">
    <header className="App-header">
   <div  style={{width:'100%',paddingLeft:10}}>
     <h1 style={{fontSize:30,color:'#000',textAlign:"left"}}> all token</h1>
     <div style={{width:'10%',height:2,backgroundColor:"#000"}}></div>
  </div>
  <TableRow data={this.state.data}/>
      </header>
    </div>
    </Layout>
  )}}

export default App;
