import React from 'react';
import './sign-in.styles.scss';
import {FormInput} from '../form-input/form-input.conponent';
import {CustomButton} from '../custom-button/custom-button.conponent';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit =async  (event) => {
        event.preventDefault();
        const { email,password} =this.state

        try {
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({
                email: '',
                password: ''
            });

        }catch (e) {
            console.log(e);
        }

    };

    handleChange = (event) => {

        const {value, name} = event.target;
        this.setState({[name]: value});
    };


    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span> Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput
                        type="email"
                        name='email'
                        label='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required/>


                    <FormInput
                        handleChange={this.handleChange}
                        type="password"
                        name='password'
                        label='password'
                        value={this.state.password}
                        required/>
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>Sign In With
                            Google</CustomButton>

                    </div>
                </form>
            </div>
        );
    }
}

export {SignIn};