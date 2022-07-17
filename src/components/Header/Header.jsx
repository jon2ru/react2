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
   // const logout = () => {
   // dispatch(logout1())}
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
          {/* {login} <Button onClick={logout}>Log out</Button> */}
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