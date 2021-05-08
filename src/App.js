import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/redux-store.js";
import { connect } from "react-redux";
import { compose } from "redux";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import News from "./Components/News/News.js";
import Music from "./Components/Music/Music.js";
import Settings from "./Components/Settings/Settings.js";
import { Route, withRouter } from "react-router";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./Components/Common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogContainer"));
const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"));
const Login = React.lazy(() => import("./Components/Login/Login"));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
          <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={withSuspense(Login)}/>
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default MainApp;
