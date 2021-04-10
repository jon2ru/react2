import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Nav />
      <div className="app-content">
        <Route />
      <Route path='/dialogs/' render={ () =><Dialogs />} />
      <Route path='/profile/' render={ () =><Profile post={props.post}/>} />
      
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
