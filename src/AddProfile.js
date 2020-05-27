import React from 'react';
import {AppContext} from './AppContext';
import $ from 'jquery';


export default class AddProfile extends React.Component{
    static contextType = AppContext;
    newProfile = () =>{
        console.log($('#firstName').val());
        let {profiles} = this.context;
        let indexId = profiles.length + 1;
        let postProfile = {
            firstName:$('#firstName').val(),
            lastName:$('#lastName').val(),
            role:$('#role').val(),
            // biography:$('#biography').val(),
            id: indexId
        };
        console.log(postProfile);
        let {addSetStateProfile} = this.context;
        addSetStateProfile(postProfile, ()=> this.props.history.push('/'));
    }
    render(){
        return(
            <form id="addProfileForm" onSubmit={e => {
                e.preventDefault();
                this.newProfile()
            }}>
                <label htmlFor="firstName">firstName</label>
                <input id="firstName"></input><br></br>
                <label htmlFor="lastName">lastName</label>
                <input id="lastName"></input><br></br>
                <label htmlFor="role">role</label>
                <input id="role"></input><br></br>
                <label htmlFor="biography">biography</label>
                <textarea id="biography" name="addProfileForm"></textarea>
                <button type="submit">Submit</button>
            </form>
        )
    }
}