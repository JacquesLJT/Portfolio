import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/resume"><ResumeDownload/></Route>
        <Route path="/proposal"><ViewProposal/></Route>
        <Route path="/paper"><ViewPaper/></Route>
        <Route render={() => <h1>404: Page not found</h1>}></Route>
      </Switch>
    </Router>
  );
}

function ResumeDownload() {
  window.location.href = "https://firebasestorage.googleapis.com/v0/b/portfolio-fdf27.appspot.com/o/web_assets%2FResume%CC%81%202021.pdf?alt=media&token=913bfa8c-bf76-4bca-a5dd-db87e3dd4898";
  return <p>Redirecting...</p>

}

function ViewProposal () {
    window.location.href = "https://firebasestorage.googleapis.com/v0/b/portfolio-fdf27.appspot.com/o/web_assets%2FResearch%20Proposal.pdf?alt=media&token=4cd13b09-bd24-47e9-81c6-133653fbbb30";
    return <p>Redirecting...</p>
}

function ViewPaper () {
    window.location.href = "https://firebasestorage.googleapis.com/v0/b/portfolio-fdf27.appspot.com/o/web_assets%2FCryptocurrency%20white%20paper.pdf?alt=media&token=b58530e0-bf3f-44d0-a72c-566e39bc4367";
    return <p>Redirecting...</p>
}

export default App;
