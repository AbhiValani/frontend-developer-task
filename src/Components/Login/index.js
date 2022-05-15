import './Login.scss';
import React from 'react';
import FormField from '../FormField';
import { ArrowRightOutlined, CloseOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Login(props) {
	const { closable, setVisible, setRegisterPopup } = props;
	const navigate = useNavigate();
	function onForgotPassword() {
		// Currently We don't have forgot-password page
		navigate('/forgot-password');
	}
	function onLoginClick() {
		// This needs to check credential first but we have assumed it's a valid one
		// That's why  we are letting users go to the home page
		navigate('/home');
	}
	function onRegisterClick() {
		// Will redirect to main Register page , if request is from home page then open a register popup
		if(closable) {
			setVisible(false);
			setRegisterPopup(true);
			return;
		}
		navigate('/register');
	}
	return (
		<div className="login-ctr">
			{
				closable ?
					<div className='close-icon'>
						<CloseOutlined onClick={() => setVisible(false)}/>
					</div> : null
			}
			<div className='flex--column center'>
				<div className='subtitle'>WELCOME BACK</div>
				<div className='title'>Log into your account</div>
			</div>
			<form className='form'>
				<FormField
					name="username"
					type="text"
					title="Email or Username" 
					placeholder="Enter your email or username" />
				<FormField 
					name="password"
					type="password"
					title="Password" 
					placeholder="Enter your password" 
					query="Forgot password?"
					onQueryClick={onForgotPassword}/>
				<FormField 
					name="login"
					type="button"
					title="Login Now"
					onButtonClick={onLoginClick}/>
				<div className='register-hint'>
					Not registered yet? 
					<span onClick={onRegisterClick}>
						{' '} Register <ArrowRightOutlined />
					</span>
				</div>
			</form>
		</div>
	);
}

export default Login;
Login.propTypes = {
	closable: PropTypes.bool,
	setVisible:PropTypes.func,
	setRegisterPopup: PropTypes.func,
};