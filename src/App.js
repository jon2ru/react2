import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import NavContainer from "./components/Nav/NavContainer";
import DialogsContainer from './components/Dialogs/DialogsContainer';
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
          <Route />
          <Route
            path="/dialogs/"
            render={() => (
              <DialogsContainer /*store={props.store}
                dialogs2={props.stateaa.dialogPages.dialogs2}
                messages2={props.stateaa.dialogPages.messages2}
                dispatch={props.dispatch}
                newDialog={props.stateaa.dialogPages.newDialog}*/
              />
            )}
          />
          <Route
            path="/profile/"
            render={() => (
              <Profile 
              //store={props.store}
              />
            )}
          />
          {/* поигрался переименовал в post1 and addPost2 */}
        </div>
      </div>
  );
}

export default App;
