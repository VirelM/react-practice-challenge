import React from 'react';
import {AppContext} from './AppContext';


// Importing context with a class compoenent 
export default class Profile extends React.Component{
    // static defaultProps = {
    //     match: {
    //       params: {}
    //     }
    //   }

    static contextType = AppContext;

    render (){
        console.log( this.context );
        console.log(this.props);
        let identifier = parseInt(this.props.match.params.profileId);
        console.log(identifier);
        let currentProfile = this.context.profiles.find( profile => {
            console.log( profile.id, identifier );
            return identifier === profile.id;
        });
        console.log(currentProfile);
        return(
            <div>
                <h1> This is the profile of {currentProfile.firstName} {currentProfile.lastName} </h1>
                <p> At Thinkful he is a {currentProfile.role} </p>
                <div>
                    <img src={currentProfile.image} alt="A person" />
                </div>
                <h2> His bio</h2>
                <p> {currentProfile.biography} </p>
            </div>
        );
    }
}


/* Importing context with a functional component */
// export default function Profile(props){
//     console.log(props);
//     return(
//         <AppContext.Consumer>
//             {
//                 function contextStuff(context){
//                     console.log( context );
//                     let identifier = props.match.params.identifier;

//                     let currentProfile = context.profiles.find( profile => {
//                         console.log( profile.id, identifier );
//                         return identifier === profile.id;
//                     });

//                     return (
//                         <div>
//                             <h1> This is the profile of {currentProfile.firstName} {currentProfile.lastName} </h1>
//                             <p> At Thinkful he is a {currentProfile.role} </p>
//                             <div>
//                                 <img src={currentProfile.image} alt="An image" />
//                             </div>
//                             <h2> His bio</h2>
//                             <p> {currentProfile.biography} </p>
//                         </div>
//                     )
//                 }
//             }
//         </AppContext.Consumer>
//     );

// }
