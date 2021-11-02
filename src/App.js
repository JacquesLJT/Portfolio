import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/resume"><ResumeDownload/></Route>
        <Route render={() => <h1>404: Page not found</h1>}></Route>
      </Switch>
    </Router>
    </>
  );
}

function ResumeDownload() {
  window.location.href = "https://firebasestorage.googleapis.com/v0/b/portfolio-fdf27.appspot.com/o/web_assets%2FResume%CC%81%202021.pdf?alt=media&token=913bfa8c-bf76-4bca-a5dd-db87e3dd4898";
  return <p>Redirecting...</p>

}

export default App;
