import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  // return <button onClick={() => loginWithRedirect({screen_hint: 'signup'})}>Signup</button>;
  return <button onClick={() => loginWithRedirect({authorizationParams: {screen_hint: 'signup'}})}>Signup</button>;
};

export default SignupButton;
