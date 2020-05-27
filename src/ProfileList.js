import React from 'react';
//import Profile from './Profile';
import { Link } from 'react-router-dom';
import {AppContext} from './AppContext';


export default class ProfileList extends React.Component{
    static contextType = AppContext;
    
    render(){
        let {profiles} = this.context;
        let profilesAll = profiles.map(profile=> <li key={profile.id}><Link to={`/profiles/${profile.id}`} >{profile.firstName}</Link></li>)
        return(
            <ul>
                {profilesAll}
                <Link to="/addprofile"><button type="button">Add Profile</button></Link>
                
            </ul>
        )
    }
}