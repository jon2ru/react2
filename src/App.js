import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Route } from "react-router-dom";
import NavContainer from "./components/Nav/NavContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
function App(props) {
  return (
    <div className="App">
      <HeaderContainer />
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
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />

        <Route path="/users/" render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;
