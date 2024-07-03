import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Autofill Extension</h1>
        <p>Simplify your job application process with our smart autofill extension.</p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
          target="_blank"
          rel="noopener noreferrer"
        >
          BUY IT NOW
        </a>
      </header>
      <main>
        <section className="features">
          <h2>Features</h2>
          <div className="feature">
            <h3>Automatic Form Filling</h3>
            <p>Effortlessly fill out job applications with your saved information.</p>
          </div>
          <div className="feature">
            <h3>Resume & Cover Letter Generation</h3>
            <p>Create professional resumes and cover letters tailored to each job.</p>
          </div>
          <div className="feature">
            <h3>Secure Data Storage</h3>
            <p>We prioritize your privacy and security with top-notch data protection.</p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Autofill Extension. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
