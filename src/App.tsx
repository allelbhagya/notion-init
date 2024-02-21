import * as React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function handleLinkedInClick() {
  window.location.href = 'https://www.linkedin.com/in/allelbhagya/';
}

function handleGitHubClick() {
  window.location.href = 'https://github.com/allelbhagya';
}

function App() {
  return (
    <>
      <div id="root">
        <NavBar />
        <h1>hello world!— <br />i'm bhagya 👩🏻‍💻 </h1>
        <div className="social-icons">
          <div onClick={handleLinkedInClick} style={{ cursor: 'pointer' }}>
            <LinkedInIcon />
          </div>
          <div onClick={handleGitHubClick} style={{ cursor: 'pointer' }}>
            <GitHubIcon />
          </div>
        </div>
        <p className="read-the-docs">
          i like neural networks, ui design and cats.
        </p>
        <div className="navigation">
          <a href="/work" >🖥️ work</a>
          <a href="https://drive.google.com/file/d/1zogdVeOS-FPj6seyrZRL_Bhg7W5mF6jI/view?usp=sharing"> 📝 resume</a>
          <a href="/interests">🍥 interests</a>
        </div>
      </div>
    </>
  );
}

export default App;
