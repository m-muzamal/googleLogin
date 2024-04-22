import "./App.css";
// import GoogelLogin from "./components/GoogelLogin";
import { useEffect } from "react";
import { gapi } from "gapi-script";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLogin from "./components/GoogleLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const clientId =
  //   "googelauth client id";

  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: "",
  //     });
  //   }
  //   gapi.load("client:auth2", start);
  // });

  return (
    <Router>
      {/* <GoogleOAuthProvider clientId={clientId}>
        <h1>Login form</h1>
        <GoogelLogin />
      </GoogleOAuthProvider> */}
      <Routes>
        <Route path="/" element={<GoogleLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
