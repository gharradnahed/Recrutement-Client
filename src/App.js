import React,{Component} from 'react';
import {Register}from './Register';
import axios from 'axios';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import {LoginPage} from './Component/LoginPage';
import Profile from './Profile';
import CompanyProf from './CompanyProf';
import UserProf from './UserProf';
import Offre from './Offre'
import ForgotPassword from './Component/ForgotPassword'
import SetNewPassword from './Component/SetNewPassword'
import SecretKey from './Component/SecretKey'
  axios.create({
  baseURL: `http://localhost:5000`

})
    class App extends Component{
        constructor(){
          super();
          axios.get('/').then(res=>{
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
             <Route path="/UserProfile" component={UserProf}></Route>
             <Route path="/Offre" component={Offre}></Route>
             <Route exact path="/forgotPassword" component={ForgotPassword}></Route>
             <Route path="/setNewPassword" component={SetNewPassword}></Route>
             <Route path="/SecretKey" component={SecretKey}></Route>

             <LoginPage/>
           
            

             </Switch>
             
          </BrowserRouter>
          </div>
       );
        }
      
    }
export default App;