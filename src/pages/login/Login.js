import React from "react";
import GoogleLogin from "react-google-login";
import "./Login.css";

class Login extends React.Component {
  onSuccess = token => {
    console.log(token);
  };

  onFailure = error => {}; 
  render() {
    return (
      <div className="Login">
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
