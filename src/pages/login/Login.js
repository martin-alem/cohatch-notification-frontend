import React from "react";
import GoogleLogin from "react-google-login";
import "./Login.css";
import httpAgent from "./../../util/httpAgent";
import Alert from "../../components/alert/Alert";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }
  onSuccess = async ({ tokenId }) => {
    try {
      const option = {
        headers: { Accept: "application/json", Authorization: "Bearer " + tokenId },
        body: null,
      };

      const serverResponse = await httpAgent("POST", `${process.env.REACT_APP_AUTH_API}/api/v1/login`, option);
      if (serverResponse.ok) {
        const jsonResponse = await serverResponse.json();
        window.location.replace("/home");
      } else {
        this.setState({ error: true });
      }
    } catch (error) {
      this.setState({ error: true });
    }
  };

  onFailure = error => {
    this.setState({ error: true });
  };
  render() {
    const visibility = this.state.error ? "visible" : "hidden";
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
                onSuccess={this.onSuccess}
                onFailure={this.onFailure}
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
}

export default Login;
