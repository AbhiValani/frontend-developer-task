/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import './FormField.scss';
import React , { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

function FormField(props) {
	const {
		name,
		type,
		value,
		placeholder,
		title,
		query,
		onQueryClick,
		onButtonClick,
		disabled,
		emoji,
	} = props;
	const [passwordVisible, setPasswordVisible] = useState(true);
	function changePasswordVisibility() {
		var ele = document.getElementById('password');
		if(!ele) {
			return;
		}
		if (passwordVisible) {
			ele.type = 'text';
		} else {
			ele.type = 'password';
		}
	}
	useEffect(() => {
		changePasswordVisibility();
	},[passwordVisible]);

	function getRenderedElement() {
		if(type === 'password') {
			return (
				<>
					<label className='field-title flex--row jc-sb'>
						<div>{title}</div>
						<div className='query-field' onClick={onQueryClick}>{query}</div>
					</label>
					<div className='flex--row password-field '>
						<input type={type} id={name} name={name} placeholder={placeholder} disabled={disabled} />
						<div className='password-icon'>{ 
							passwordVisible ?
								<EyeOutlined onClick={() => setPasswordVisible(false)}/>
								: <EyeInvisibleOutlined onClick={(val) => setPasswordVisible(true)}/>
						}
						</div>
					</div>
				</>
			);
		}
		else if(type === 'button') {
			return (
				<button type={type} onClick={onButtonClick} disabled={disabled} >{title}</button> 
			);
		}
		else if(type === 'textarea') {
			return (
				<div className='flex--row comment-section'>
					<div className='comment-icon'>
						<span>{emoji}</span>
					</div>
					<textarea id={name} name={name} value={value} placeholder={placeholder} disabled={disabled} />
				</div>
			);
		}
		return (
			<>
				<label className='field-title flex--row jc-sb'>
					<div>{title}</div>
					<div className='query-field' onClick={onQueryClick}>{query}</div>
				</label>
				<input type={type} id={name} name={name} placeholder={placeholder} disabled={disabled} />
			</>
		);
    
	}
	return (
		<div className="form-field-ctr">
			{getRenderedElement()}
		</div>
	);
}

export default FormField;

FormField.propTypes = {
	name: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	title: PropTypes.string,
	query: PropTypes.string,
	value: PropTypes.string,
	emoji: PropTypes.string,
	disabled: PropTypes.bool,
	onQueryClick: PropTypes.func,
	onButtonClick:PropTypes.func,
};