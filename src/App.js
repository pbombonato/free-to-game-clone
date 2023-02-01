import './App.css';
import React from 'react';
// import Home from './pages/Home'
import Header from './components/Header';
import Footer from './components/Footer';
import GameDetailsPage from './pages/GameDetailsPage';

function App() {
  const id = 475

  const userInfo = {
    loginStatus: false,
  }


  return (
    <React.Fragment>
      <Header />
      {/* <Home /> */}
      <GameDetailsPage id={id} {...userInfo} />
      <Footer />
    </React.Fragment>
  )
}

export default App;
