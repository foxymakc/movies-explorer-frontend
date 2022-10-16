import React from "react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Profile from "../components/Profile/Profile";

const ProfilePage = (props) => (
  <React.Fragment>
    <Header onEditMenu={props.onEditMenu} />
    <Profile
      onLogout={props.onLogout}
      handleUpdateUserInfo={props.handleUpdateUserInfo}
      currentUser={props.currentUser}
      isProfileError={props.isProfileError}
      isErrorText={props.isErrorText}
    />
    <Navigation isOpen={props.isOpen} onClose={props.onClose} />
  </React.Fragment>
);

export default ProfilePage;
