import "./App.css";
import GoogelLogin from "./components/GoogelLogin";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientId =
    "1018532335187-slhnf667q3vq9i31epl5b0e4jg692mq5.apps.googleusercontent.com";

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <h1>Login form</h1>
      <GoogelLogin />
    </GoogleOAuthProvider>
  );
}

export default App;
