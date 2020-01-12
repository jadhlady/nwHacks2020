import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom'

const styles = {
    button: {
        // padding: "10px",
        margin: "10px"
    },
    input: {
        display: 'none',
    },
    card: {
        margin: "20px",
        width: "70%",
        textAlign: "centre",
    }
};


class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userType: null
        }
    }

    userTypeHandler(type) {
        this.setState({userType: type})
    }

    renderRedirect = () => {
        localStorage.setItem('usertype',
            JSON.stringify(this.state.userType));
        return <Redirect to='/dashboard'/>
    }

    render(){
        return (
            <div>
                {!this.state.userType
                    ?
                    <Card style={styles.card}>
                        <CardHeader
                            title="What type of user are you?"
                        />
                        <Button variant="contained" color="primary" style={styles.button} onClick={() => {
                            this.userTypeHandler("client")
                        }}>
                            Client
                        </Button>
                        <Button variant="contained" color="primary" style={styles.button} onClick={() => {
                            this.userTypeHandler("clinic")
                        }}>
                            Clinic
                        </Button>
                    </Card>
                    :
                    <div>
                        {this.renderRedirect()}
                    </div>

                }
            </div>
        );
    }
}

export default SignIn;