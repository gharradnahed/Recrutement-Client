import React,{Component} from 'react';
import {Register}from './Register';
import axios from 'axios';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import {LoginPage} from './Component/LoginPage';
import Profile from './Profile';
import CompanyProf from './CompanyProf';

  axios.create({
  baseURL: `http://localhost:5000`

})
    class App extends Component{
        constructor(){
          super();
          axios.get('/').then(res=>{
            console.log(res.data);
          })
        }
        render(){

       return(
          <div>
          <BrowserRouter>
          <Switch>

             <Route path="/Register" component={Register}>
             </Route>
             <Route path="/Profile" component={Profile}></Route>
             <Route path="/CompanyView" component={CompanyProf}></Route>
             <LoginPage/>
           
            

             </Switch>
             
          </BrowserRouter>
          </div>
       );
        }
      
    }
export default App;