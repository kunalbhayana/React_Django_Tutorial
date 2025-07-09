import React from 'react';
import './App.css';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Registration</h1>
      </header>
      <main>
        <SignupForm />
      </main>
    </div>
  );
}

export default App;
