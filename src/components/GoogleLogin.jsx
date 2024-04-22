import React from "react";

const Login = () => {
  const handleLoginClick = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  return (
    <div>
      <h1>Login with Google</h1>
      <button onClick={handleLoginClick}>Login with Google</button>
    </div>
  );
};

export default Login;
