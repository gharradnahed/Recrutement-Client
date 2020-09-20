import React,{Component} from 'react';
import {Register}from './Register';
import Axios from 'axios';

import { BrowserRouter,Route,Switch } from 'react-router-dom';

import {LoginPage} from './Component/LoginPage';
const api =Axios.create({
  baseURL:'http://localhost:5000/user/'
})
    class App extends Component{
        constructor(){
          super();
          api.get('/').then(res=>{
            console.log(res.data);
          })
        }
        render(){

       return(
          <div>
          <BrowserRouter>
          <Switch>
          
             <Route path="/Register" component={Register}></Route>
             <LoginPage/>
             </Switch>
             
          </BrowserRouter>
          </div>
       );
        }
      
    }
export default App;