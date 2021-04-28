import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav
          friends={props.stateaa.dialogPages.dialogs2}
   /* так как взял отсюда , то при изменении Dialogs.jsx
    меняется и в Nav.jsx */
          sideavata={props.stateaa.sidebar}
        />

        <div className="app-content">
          <Route />
          <Route
            path="/dialogs/"
            render={() => (
              <Dialogs
                dialogs2={props.stateaa.dialogPages.dialogs2}
                messages2={props.stateaa.dialogPages.messages2}
                addNewDialog={props.addNewDialog}
                updateDialogs={props.updateDialogs}
                newDialog={props.stateaa.dialogPages.newDialog}
              />
            )}
          />
          <Route
            path="/profile/"
            render={() => (
              <Profile
                post1={props.stateaa.profilePage}
                addPost2={props.addPost}
                updatenewPost3={props.updatenewPost}
              />
            )}
          />
          {/* поигрался переименовал в post1 and addPost2 */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
