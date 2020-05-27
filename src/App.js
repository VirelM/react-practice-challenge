import React from 'react';
import './App.css';
import ProfileList from './ProfileList';
import AddProfile from './AddProfile';
import {AppContext} from './AppContext';
import { Route } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import Profile from './Profile';
class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      profiles : [
        {
          firstName : "Alfredo",
          lastName : "Salazar",
          role : "Mentor",
          id : 123
        },
        {
          firstName : "Daniel",
          lastName : "Di Venere",
          role : "Student",
          id : 456
        }
      ]
    }
  }
  
  addSetStateProfile = (newprofile, callback) =>{
    console.log("hello am i working?");
    console.log(newprofile);
    console.log({profiles:[...this.state.profiles, newprofile], callback});
    console.log(this.state.profiles, 'before');
    this.setState({profiles:[...this.state.profiles, newprofile], callback})
    console.log(this.state.profiles, 'after');
  }

  render(){
    return (
      <div>
        <AppContext.Provider value={{profiles:this.state.profiles, addSetStateProfile:this.addSetStateProfile}}>
          <Route exact path="/" component={ProfileList}></Route>
          <Route exact path="/profiles/:profileId" component={Profile}></Route>
          <Route exact path="/addprofile" component ={AddProfile}></Route>
          
          {/* Add a form to add a new profile to the list  */}
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;
