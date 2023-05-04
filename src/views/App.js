import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import MyEvent from './Example/DOM_event';
import MyExample from "./Example/Example";
import MyState from "./Example/ChangeState";
import Form from './Example/Form';
import ChildComponent from './Example/ChildComponent';
import OutputtingLists from './Example/Outputting_Lists';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import {
  BrowserRouter as BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
/**
 * 2 components: class component / function component ( function, arrow )
 */


function App() {
  // JSX
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo/>
            </Route>
            <Route path="/about">
              <Form/>
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
      </div>
    </BrowserRouter>
  );
}

export default App;
