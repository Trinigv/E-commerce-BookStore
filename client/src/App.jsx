import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BookShelf from './components/BookShelf/BookShelf';
import AboutUs from './components/AboutUs/AboutUs';
import login from './components/SignIN/SignIn';
import userprofile from './components/UserProfile/UserProfile';
import Nav from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import register from './components/SignUP/SignUp';
import details from './components/BookDetail/BookDetail';
import landing from './components/Landing/LandingPage';
import Page404 from './components/Page404/Page404';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Dashboard from './components/Dashboard/Dashboard';

/*
 NO SACAR EL SWITCH, AMIGUENSE CON REACT ROUTER DOM V5 :D
*/

function App() {
	return (
		<React.Fragment>
			<ScrollToTop />
			<Nav />
			<Switch>
				<Route exact path='/' component={landing} />
				<Route path='/books' component={BookShelf} />
				<Route path='/book/:id' component={details} />
				<Route path='/register' component={register} />
				<Route path='/login' component={login} />
				<Route path='/us' component={AboutUs} />
				<Route path='/adminDashboard' component={Dashboard} />
				<Route path='/profile' component={userprofile} />
				<Route path='*' component={Page404} />
			</Switch>
			<Footer />
		</React.Fragment>
	);
}

export default App;
