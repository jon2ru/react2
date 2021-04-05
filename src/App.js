import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <div className="app-content">
      {/* <Profile /> */}
      <Dialogs />
      </div>
    </div>
  );
};

export default App;
