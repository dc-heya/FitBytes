import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import DashBoard from './pages/DashBoard';
import Disease from './pages/Diseases/Disease';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Update from './pages/Update';
import WaterPage from './pages/WaterPage';
import NutritionPage from './pages/NutritionPage';
import ExercisePage from './pages/ExercisePage';
import WeightPage from './pages/WeightPage';
import MoreInfoPage from './pages/MoreInfoPage';
// import MoreInfoPage from './pages/LandingPage';
import FoodPage from './pages/FoodPage/FoodPage';
import './App.css';
import LandingPage from './components/Landing/LandingPage';
import DiseaseComponent from './components/DiseaseComponent';
import DailyDiet from './pages/DailyDiet/DailyDiet';
import Footer from './components/DashBoard/Footer';

const App = () => (
  <Router>
    {/* <div className='bg-gradient-to-r from-green-200 to-red-200 min-h-screen'> */}
    <div className='bg-white min-h-screen'> 
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={DashBoard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/update" component={Update} />
        <Route exact path="/diseases" component={DiseaseComponent} />
        <Route exact path="/water" component={WaterPage} />
        <Route exact path="/nutrition" component={NutritionPage} />
        <Route exact path="/exercise" component={ExercisePage} />
        <Route exact path="/weight" component={WeightPage} />
        <Route exact path="/Info" component={MoreInfoPage} />
        <Route exact path="/food" component={FoodPage} />
        <Route exact path="/dailydiet" component={DailyDiet} />
      </Switch>
      <Footer/>
    </div>
  </Router>
);

export default App;