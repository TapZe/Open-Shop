import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/reducers/user/userLoginAPI";
import ErrorMessage from "../../components/ErrorMessage";
import useAuthCheck from "../../hooks/useAuthCheck";

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });
  const [loginUser, { isLoading, isError, isSuccess, error }] =
    useLoginUserMutation();
  const navigate = useNavigate();
  const isAuthenticated = useAuthCheck();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginUser(credentials).unwrap();
      setTimeout(() => navigate("/"), 500);
    } catch (err) {
      console.error("Login Error:", err);
    }
  };

  return (
    <>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Welcome to <span className="text-cyan-600">O</span>pen
              <span className="text-cyan-600">Shop</span>!
            </h1>
            <p className="py-6">
              Discover amazing products at unbeatable prices. Shop now and
              experience the convenience of online shopping with OpenShop.
            </p>
            {isError && <ErrorMessage error={error} />}
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  name="username"
                  className="input input-bordered"
                  value={credentials.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
                <label className="label">
                  <Link to={`/auth/register`} className="hover:underline">
                    Want to register?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>
              </div>
              {isSuccess && <p className="text-green-500">Login successful!</p>}
              <div className="form-control mt-4">
                <Link to={`/`} className="btn btn-secondary">
                  Back to Home Page
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
