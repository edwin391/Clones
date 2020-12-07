import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import { auth } from "./firebase";
import Imessage from "./pages/Imessage";
import Login from "./components/Login";
import "./styles/App.css";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const width = window.innerWidth;

  console.log(width);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {user ? (
        <Imessage />
      ) : (<Login /> )}
    </div>
  );
}

export default App;
