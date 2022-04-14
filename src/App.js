// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Headercomp from './Header';
import {FooterComponent} from'./Footer';
import SideComponent from './Sidenavbar';
import NavabarComponent from './Navbar';
import RightComponent from './Rightnavbar';
import BodyComponent from './Body';
import StateComponent from './State';
import { ExportComponent } from './Export';
import { ImportComponent } from './Import';
import FunctionComponent from './Function';

function App() {
  let data="golla"
  return (
    <div className="App">
    
    <Headercomp/>
    <FooterComponent/>   
    <SideComponent/> 
    <NavabarComponent/>
    <BodyComponent/>
    <RightComponent/>
    <StateComponent/>
    <ExportComponent/>
    <ImportComponent/>
    <FunctionComponent/> 
    
   
    </div>
  );  
}

export default App;
