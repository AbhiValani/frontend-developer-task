import './App.scss';
import Login from '../Components/Login';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import imageIcon from '../resources/login-page-icon.png';
import Register from '../Components/Register';
import Home from '../Components/Home';
function App() {
	return (
		<div className="App flex--column center">
			<BrowserRouter>
				<Routes>
					<Route
						path="/" 
						element={
							<>
								<img src={imageIcon} height={40} width={40} className="login-image"/>
								<Login  />
							</>
						}
					/>
					<Route
						path="/register" 
						element={
							<Register />
						}
					/>
					<Route
						path="/home" 
						element={
							<Home />
						}
					/>
				</Routes>
			</BrowserRouter>
			
		</div>
	);
}

export default App;
