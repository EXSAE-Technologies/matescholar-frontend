import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './Components/navbar';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="container-fluid">
        <NavBar />
      </div>
    );
  }
}

export default App;
