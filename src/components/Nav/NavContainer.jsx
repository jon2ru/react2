import StoreContext from "../../StoreContext";
import Nav from "./Nav";


const NavContainer = () => {
  return <StoreContext.Consumer>
     {
      (store)=> {
  let state= store.getState()
 return <Nav friends={state.dialogPages.dialogs2} 
 sideavata={state.sidebar} />
      }
    }
 </StoreContext.Consumer>
 };

export default NavContainer;
