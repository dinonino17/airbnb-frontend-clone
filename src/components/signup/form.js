import React, {Component} from 'react';
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class SignUpForm extends Component {
    render(){
        return(
            <div>
                <Card>
                    <p>Registrate en Airbnb Clon</p> 
                    <TextField />   
                    <TextField />   
                    <TextField />   
                    <TextField />  
                    <TextField 
                        type="date"
                        />  
                    <Button 
                        color="secondary"
                        variant="contained"
                    >
                    Registrate
                    </Button>
                </Card>
            </div>
        )
    }
}

export default SignUpForm;