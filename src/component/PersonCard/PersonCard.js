import React,{Component} from 'react';

class PersonCard extends Component{
    render(){
        const {nombre,apellido,age,hairColor} = this.props;
        return(
            <div>
                <h1>{nombre},{apellido}</h1>
                <p>Age: {age}</p>
                <p>Hair color: {hairColor}</p>
            </div>
        );
    }
}

export default PersonCard;