import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";

const Login = () => {
  const { singIn, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    // form.reset();

    singIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        // navigate("/");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // console.log(error);
        setError(error.message);
      });
  };

  const handleGoogleSingIn = () => {
    googleSignIn()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <span className="text-danger">{error}</span>
              <div className="form-control mt-2">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="divider">OR</div>
              <div className="form-control">
                <Link>
                  <button
                    onClick={handleGoogleSingIn}
                    className="btn btn-primary w-full"
                  >
                    Continue with google
                  </button>
                </Link>
              </div>
              <div className="divider"></div>
              <div className="form-control">
                <Link to="/register">
                  <button className="btn btn-primary w-full">
                    Create New Account
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
