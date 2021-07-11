import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import NavContainer from "./components/Nav/NavContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
function App(props) {
  return (
    <div className="App">
      <Header />
      <NavContainer
      /* store={props.store}
          friends={props.stateaa.dialogPages.dialogs2}
    так как взял отсюда , то при изменении Dialogs.jsx
    меняется и в Nav.jsx 
      sideavata={props.stateaa.sidebar}*/
      />

      <div className="app-content">
        {/* <Route /> */}
        <Route path="/dialogs/" render={() => <DialogsContainer />} />
        <Route path="/profile/" render={() => <Profile />} />
      <Route path="/users/" render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;
