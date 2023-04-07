import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import MyEvent from './Example/DOM_event';
import MyExample from "./Example/Example";
import MyState from "./Example/ChangeState";
import Form from './Example/Form';
import ChildComponent from './Example/ChildComponent';
import OutputtingLists from './Example/Outputting_Lists';

/**
 * 2 components: class component / function component ( function, arrow )
 */


function App() {
  // JSX
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Form/>
        
        
      </header>
      
    </div>
  );
}

export default App;
