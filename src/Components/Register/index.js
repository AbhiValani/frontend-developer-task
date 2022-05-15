import React from 'react';
import FormField from '../FormField';
import '../Login/Login.scss';
import PropTypes from 'prop-types';
import { ArrowRightOutlined, CloseOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function Register(props) {
	const { closable, setVisible } = props;
	const navigate = useNavigate();
	function onLoginClick() {
		// Will redirect to main login page
		navigate('/');
	}
	function onRegisterClick() {
		// This needs to call backend to store the user details in DB. This step is skipped.
		// Then will Redirect to home page
		navigate('/home');
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
				<div className='subtitle'>SIGN UP</div>
				<div className='title'>Create an account to continue</div>
			</div>
			<form className='form'>
				<FormField
					name="email"
					type="text"
					title="Email" 
					placeholder="Enter your email" />
				<FormField
					name="username"
					type="text"
					title="Username" 
					placeholder="Choose a preferred username" />
				<FormField 
					name="password"
					type="password"
					title="Password" 
					placeholder="Choose a strong password"/>
				<FormField 
					name="login"
					type="button"
					title="Continue"
					onButtonClick={onRegisterClick}/>
				<div className='register-hint'>
					Already have an account?
					<span onClick={onLoginClick}>
						{' '} Login <ArrowRightOutlined />
					</span>
				</div>
			</form>
		</div>
	);
}

export default Register;

Register.propTypes = {
	closable: PropTypes.bool,
	setVisible:PropTypes.func,
};