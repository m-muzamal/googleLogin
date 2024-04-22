import { GoogleLogin } from "@react-oauth/google";

const clientId =
  "1018532335187-slhnf667q3vq9i31epl5b0e4jg692mq5.apps.googleusercontent.com";

function GoogelLogin() {
  const onSuccess = (res) => {
    console.log("Login Successful:", res);
  };

  const onFailure = (err) => {
    console.error("Login Failed:", err);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
}

export default GoogelLogin;
