import React from 'react';
import './App.css';
import Food from './components/Food';
import Footer from './components/Footer';
import Header from './components/Header';
import MyIntro from './components/MyIntro';
import Section from './components/Section';
import header from './components/header';
import CheckboxApp from './components/checkbox';
import Time from './components/Time';
import PropComp from './components/PropComp';
import MyComponent from './components/MyComponent';
import App1 from './classbased/App';
import Login from './States/Login';
import MilesAhead from './States/MilesAhead';
import Clock from './States/Clock';
import Car from './States/Car';
import Counter from './States/Counter';
import { EffectDemo } from './States/EffectDemo';
import Calculator from './States/Calculator';

function App() {
  return (
    <>
      <header/>
      <Header/>
      <Section/>
      <Food/>
      <MyIntro/>
      <Footer/>
      <h1>Day two work</h1>
      <Time/>
      <CheckboxApp/>
      <h1>Using Props exercises Day 3</h1>
      <PropComp/>
      <MyComponent/>
      <h1>Using class based components day 3</h1>
      <App1/>
      <h1>Day 4 - state</h1>
      <Login/>
      <MilesAhead/>
      <Clock/>
      <Car/>
      <Calculator/>
      <Counter/>
    
      
    </>


  );
}

export default App;
