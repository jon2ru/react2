import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Breadcrumb, Col, Layout, Menu, Row } from 'antd';
import React, { Suspense } from 'react';
import 'antd/dist/antd.css';
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Route, Switch, withRouter, Redirect, NavLink } from "react-router-dom";
import NavContainer from "./components/Nav/NavContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Musik from "./components/Musik";
import {UsersPage} from "./components/Users/UsersApiContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import Login2 from "./components/Login/Login";
import { initializeApp } from "./Redux/app-Reduser";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import { Button } from 'antd';
import classes from "./components/Nav/Nav.module.css";
import {Header} from './components/Header/Header';
// import { ChatPage } from './pages/Chat/ChatPage';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'));


const {Content, Footer, Sider } = Layout;
export const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: key==='1'?<NavLink to="/dialogs" activeClassName={classes.active}>
  Dialogs
</NavLink>:key==='2'?
  <NavLink to="/profile" activeClassName={classes.activeLink}>
  Profile
</NavLink>:
<NavLink to="/chat" activeClassName={classes.active}>
          Chat
 </NavLink>,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: key==='1'?<NavLink to="/dialogs" activeClassName={classes.active}>
    Dialogs
  </NavLink>:key==='2'?
    <NavLink to="/profile" activeClassName={classes.activeLink}>
    Profile
  </NavLink>:
  <NavLink to="/users" activeClassName={classes.active}>
            Users
   </NavLink>,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: key==='1'?'My2 Profile':key==='2'?'Profile':'Messages',
      };
    }),
  };
});

const App = () => (
  <Layout>
     <Header />
     
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout
        className="site-layout-background"
        style={{
          padding: '24px 0',
        }}
      >
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
            }}
            items={items2}
          />
        </Sider>
        {/* ********************************** */}
        <Content style={{ padding: '0 24px', minHeight: 280,}}>
          <div>
          <Suspense fallback={<div>Загрузка...</div>}>
            <section>
              <Route path="/chat/" render={() => <ChatPage />} />
              <Route path="/dialogs/" render={() => <DialogsContainer />} />
              <Route path="/musik/" render={() => <Musik />} />
              <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
              {/* знак вопроса обозначает ,что может и не быть userId . это для withRouter */}
            </section>
          </Suspense>
          <Route path="/users" render={() => <UsersPage pageTitle={'Samuray'}/>} />
          {/* Samuray собственные пропсы */}
          <Route path="/login/" render={() => <Login2 />} />
          <Route exact path="/" render={() => <Redirect from="/" to="/profile" />} />
          {/* <Route path="*" render={() => <div>404 NOT FOUND
            <Button type='primary'>OK</Button>
          </div>} /> */}
           </div>
        </Content>
      </Layout>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

export default App;
