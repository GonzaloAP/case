import React from "react";
import app from "../base";
import { Link, Route } from "react-router-dom";

const LoginActions = () => (
  <div>
    <span>No tienes cuenta?</span>
    <Link to="/signup"> crear nueva cuenta</Link>
  </div>
);

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      localStorage.setItem("user", JSON.stringify(user));
      this.props.history.push("/profile");
      console.log("======== Usuario Logueado ===========");
      console.log(user);
      console.log("====================================");
    } catch (error) {
      alert(error);
    }
  };
  render() {
    return (
      <div className="top-content">
        <div className="inner-bg">
          <div className="container">
            <div className="row  card justify-content-center align-items-center">
              <div className="col-sm-6 ">
                <h1>
                  <strong>Iniciar Sesion</strong>
                </h1>
              </div>
            </div>
            <div className="row card justify-content-center align-items-center ">
              <div className="col-sm-6 col-sm-offset-3 form-box">
                <div className="form-bottom">
                  <form
                    role="form"
                    className="login-form "
                    onSubmit={this.handleSignUp}
                  >
                    <div className="form-group">
                      <label className="sr-only">Usuario</label>
                      <input
                        name="email"
                        type="email"
                        placeholder="Username..."
                        className="form-username form-control"
                        id="form-username"
                      />
                    </div>
                    <div className="form-group">
                      <label className="sr-only">Contrasena</label>
                      <input
                        name="password"
                        type="password"
                        placeholder="Password..."
                        className="form-password form-control"
                        id="form-password"
                      />
                    </div>
                    <button type="submit" className="btn">
                      Ingresar
                    </button>
                  </form>
                  <div style={{ marginTop: "8px" }}>
                    <Route
                      path="/login"
                      exact
                      render={() => <LoginActions />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
