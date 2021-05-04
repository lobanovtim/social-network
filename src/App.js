import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import News from "./Components/News/News.js";
import Music from "./Components/Music/Music.js";
import Settings from "./Components/Settings/Settings.js";
import { Route, withRouter } from "react-router";
import DialogContainer from "./Components/Dialogs/DialogContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./Components/Common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if(!this.props.initialized) {
      return <Preloader/>
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
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
})

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);
