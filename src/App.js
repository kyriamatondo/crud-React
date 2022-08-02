import logo from './logo.svg';
import './App.css';
import { student } from './services/students';
let student = new Student();


function App() {

  let students = student.fetchAll();
  for (let student of students) {
    console.log(student);
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React


        </a>
      </header>
    </div>
  );
}

export default App;
