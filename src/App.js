import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/pages/Main";
import SelectTheme from "./components/pages/SelectTheme";
import CodeReview from './components/pages/CodeReview';
import Tutorial from './components/pages/Tutorial';
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";

function App() {
return (
	<Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/select-theme' component={SelectTheme} />
      <Route path='/code-review' component={CodeReview} />
      <Route path='/tutorial' component={Tutorial} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path="*" element={<h1>404 페이지</h1>}/>
    </Switch>
	</Router>
);
}

export default App;
