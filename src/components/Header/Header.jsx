import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { Avatar, Button, Col, Layout, Menu, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logout1 } from "../../Redux/authReduser";
import { items1 } from "../../App";
import { UserOutlined } from '@ant-design/icons';

export const Header =()=>{
   const dispatch = useDispatch();
   const isAuth = useSelector(state => state.auth.isAuth )
   const login = useSelector(state => state.auth.login )
   const logout = () => {
   dispatch(logout1())}
   const {Header } = Layout;
      return <Header className="header">
      <div className="logo" />
       <Row>{/*строка */}
       {/* Col-колонок */}
          <Col span={18}> <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /></Col>
           {isAuth ?
          <>
            <Col span={1}>
         
          <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
          </Col>
          <Col span={5}>
          {login} <Button onClick={logout}>Log out</Button>
          </Col>
          </>
          
           :
           <Col span={6}>
            <Button>
             <NavLink to={'/Login'}>Login</NavLink>
             </Button>
             
             </Col>}
         </Row>
      
    </Header> 
}
// const Header = (props) => {
//   
//   // <button onClick={() => dispatch({ type: 'increment-counter' })}>;
//   // const logout = alert(123)
//   
//
//   return (
//     <header className={classes.header}>
//       <div className={classes.item}>header</div>
//       <div className={classes.loginBlock}>
//         <Row>
//           <Col span={20}>col <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /></Col>

//           <Col span={4}>col   <Avatar>U</Avatar>
//          </Col>
//         </Row>
//       </div>
//     </header>
//   );
// };

{/* <Header className="header">
      <div className="logo" />
       <Row>{/*строка */}
       {/* Col-колонок */}
        //   <Col span={20}> <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /></Col>

        //   <Col span={4}><Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /></Col>
        // </Row>
      
    // </Header> */}