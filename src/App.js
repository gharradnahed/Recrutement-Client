import React,{Component} from 'react';
import {Register}from './Register';
import axios from 'axios';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import {LoginPage} from './Component/LoginPage';
import Profile from './Profile';
import CompanyProf from './CompanyProf';
import UserProf from './UserProf';
import Offre from './Offre'
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
/*        componentDidMount(){
          const config={
            headers:{
              authorization: 'Bearer' + localStorage.getItem('token')
            }
          };
           axios.get('http://localhost:5000/api/user',config).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
        }*/
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

             <LoginPage/>
           
            

             </Switch>
             
          </BrowserRouter>
          </div>
       );
        }
      
    }
export default App;