import React, { Suspense } from 'react';
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Route } from "react-router-dom";
import NavContainer from "./components/Nav/NavContainer";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import QplOogin from "./components/Login/Login";
import { initializeApp } from "./Redux/app-Reduser";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
// ленивая загрузка почему-то работает внизу импортов
class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  } //END componentDidMount
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
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
          <Suspense fallback={<div>Загрузка...</div>}>
           <section>
            <Route path="/dialogs/" render={() => <DialogsContainer />} />
            <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
            {/* знак вопроса обозначает ,что может и не быть userId . это для withRouter */}
            </section>
         </Suspense> 
          <Route path="/users/" render={() => <UsersContainer />} />
          <Route path="/login/" render={() => <QplOogin />} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});
export default compose(withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
/*   когда connect(им) компоненту сбивается роут поэтому добавлен withRouter
  ,но вроде уже пофиксили эту ошибку и можно не добавлять */
