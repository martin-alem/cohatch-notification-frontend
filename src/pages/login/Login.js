import React from "react";
import GoogleLogin from "react-google-login";
import "./Login.css";
import httpAgent from "./../../util/httpAgent";
import Alert from "../../components/alert/Alert";
import { UserContext } from "./../../context/userContext";

function Login() {
  const userContext = React.useContext(UserContext);
  const [error, setError] = React.useState(false);

  const onSuccess = async ({ tokenId }) => {
    try {
      const option = {
        headers: { Accept: "application/json", Authorization: "Bearer " + tokenId },
        body: null,
      };

      const serverResponse = await httpAgent("POST", `${process.env.REACT_APP_AUTH_API}/api/v1/login`, option);
      if (serverResponse.ok) {
        const jsonResponse = await serverResponse.json();
        userContext.setUser(jsonResponse["payload"]);
        window.location.replace("/home");
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const onFailure = error => {
    console.error(error);
  };
  const visibility = error ? "visible" : "hidden";
  return (
    <div className="Login">
      <Alert heading="There was an error authenticating" message="Google was unable to to verify your Google account" type="warning" visibility={visibility} />
      <div className="ui card">
        <div className="content">
          <div className="header">COhatch</div>
          <div className="meta">Chat Application</div>
          <div className="description">
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Continue With Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              theme="dark"
              responseType="token"
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
        <div className="extra content">&copy;COhatch</div>
      </div>
    </div>
  );
}

export default Login;
