import React, {useState} from 'react';
import BSInputs from './bootstrap/BSInputs';


const RegisterForm = props => {

    const {inputs, setInputs} = props;

    const [firstNameHelperClassName, setFirstNameHelperClassName] = useState('');
    const [firstNameHelperText, setFirstNameHelperText] = useState('');
  
    const [lastNameHelperClassName, setLastNameHelperClassName] = useState('');
    const [lastNameHelperText, setLastNameHelperText] = useState('');
  
    const [emailHelperClassName, setEmailHelperClassName] = useState('');
    const [emailHelperText, setEmailHelperText] = useState('');
  
    const [passwordHelperClassName, setPasswordHelperClassName] = useState('');
    const [passwordHelperText, setPasswordHelperText] = useState('');

    const [confirmPasswordHelperClassName, setConfirmPasswordHelperClassName] = useState('');
    const [confirmPasswordHelperText, setConfirmPasswordHelperText] = useState('');

    const onChange = e => {
        setInputs({
          ...inputs,
          [e.target.name]: e.target.value
        });
    };

    const handleFirstName = e => {
        onChange(e);
        if(e.target.value.length<1){
          setFirstNameHelperClassName('text-danger');
          setFirstNameHelperText('First Name is required');
        } else if(e.target.value.length<3) {
          setFirstNameHelperClassName('text-danger');
          setFirstNameHelperText('First name must be at least 2 characters');
        } else {
          setFirstNameHelperClassName('text-muted');
          setFirstNameHelperText('');
        }
      }

    const handleLastName = e => {
      onChange(e);
      if(e.target.value.length<1){
        setLastNameHelperClassName('text-danger');
        setLastNameHelperText('Last Name is required');
      } else if(e.target.value.length<3) {
        setLastNameHelperClassName('text-danger');
        setLastNameHelperText('Last name must be at least 2 characters');
      } else {
        setLastNameHelperClassName('text-muted');
        setLastNameHelperText('');
      }
    }

    const handleEmail = e => {
        var re = /\S+@\S+\.\S+/;
        onChange(e);
        // alert(e.target.type);
        if(e.target.value.length<1){
          setEmailHelperClassName('text-danger');
          setEmailHelperText('Email is required');
        } else if(e.target.value.length<5) {
          setEmailHelperClassName('text-danger');
          setEmailHelperText('Email must be at least 5 characters');
        } else if(!re.test(e.target.value)) {
            setEmailHelperClassName('text-danger');
            setEmailHelperText('Not valid email!');          
        }
        else {
          setEmailHelperClassName('text-muted');
          setEmailHelperText('');
        }
      }

      const handlePassword = e => {
        onChange(e);
        if(e.target.value.length<1){
          setPasswordHelperClassName('text-danger');
          setPasswordHelperText('Password is required');
        } else if(e.target.value.length<8) {
          setPasswordHelperClassName('text-danger');
          setPasswordHelperText('Password must be at least 8 characters');
        } else {
          setPasswordHelperClassName('text-muted');
          setPasswordHelperText('');
        }
      }
  

      const handleConfirmPassword = e => {
        onChange(e);
        if(e.target.value.length<1){
          setConfirmPasswordHelperClassName('text-danger');
          setConfirmPasswordHelperText('Password is required');
        } else if(e.target.value.length<8) {
          setConfirmPasswordHelperClassName('text-danger');
          setConfirmPasswordHelperText('Password must be at least 8 characters');
        } else {
          setConfirmPasswordHelperClassName('text-muted');
          setConfirmPasswordHelperText('');
        }
      }

    return (
        <form action="">
        
            <BSInputs
                name="firstname"
                label="First Name" 
                required="required"
                minLength="2"
                onChange={handleFirstName} 
                value={inputs.firstname}
                helperClassName={firstNameHelperClassName}
                helperText={firstNameHelperText} />

            <BSInputs
                name="lastname" 
                label="Last Name" 
                minLength="3"
                onChange={handleLastName} 
                value={inputs.lastname}
                helperClassName={lastNameHelperClassName}
                helperText={lastNameHelperText} />

            <BSInputs
                name="email" 
                label="Email" 
                minLength="5"
                onChange={handleEmail} 
                value={inputs.email}
                helperClassName={emailHelperClassName}
                helperText={emailHelperText} />

            <BSInputs
                name="password" 
                label="Password" 
                minLength="8"
                type="password"
                onChange={handlePassword} 
                value={inputs.password}
                helperClassName={passwordHelperClassName}
                helperText={passwordHelperText} />
        
            <BSInputs
                name="confirmPassword" 
                label="Confirm Password" 
                type="password"
                minLength="8"
                onChange={handleConfirmPassword} 
                value={inputs.confirmPassword}
                helperClassName={confirmPasswordHelperClassName}
                helperText={confirmPasswordHelperText} />

            <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    );
};

export default RegisterForm;