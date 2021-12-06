import React from 'react';
import { Route } from 'react-router-dom';
import Main from './components/Main'
import Header from '../../../../../../Projects_/Tuwaiq-Project2-JS/frontend/src/components/header/Header';
import Footer from '../../../../../../Projects_/Tuwaiq-Project2-JS/frontend/src/components/footer/Footer';


const App = () => {
	return (
		<div>
			<h1>Hello every one</h1>
			<Header/>
			<Route path="/" element={<Main />} />
			<Route path="/" element={<Main />} /> 
			<Footer/>
		</div>
	)
};

export default App;
