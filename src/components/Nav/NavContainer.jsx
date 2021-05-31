import Nav from "./Nav";


const NavContainer = (props) => {
  let state= props.store.getState()
 return <Nav friends={state.dialogPages.dialogs2} 
 sideavata={state.sidebar} />;
 };

export default NavContainer;
