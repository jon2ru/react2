import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import React from "react";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
    //беру из стейта
});
//на входе разные компоненты Component
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"} />;
            //редирект если не залогинен
            return <Component {...this.props} />
        }
    }
    let connectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return connectedAuthRedirectComponent;
};