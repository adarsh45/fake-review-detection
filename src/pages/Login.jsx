import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    let data = JSON.stringify({
      username: username,
      password: password,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BACKEND_URL}/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          toast.success("Logged in successfully!");
          navigate("/reviews");
        } else {
          toast.info(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          toast.error("Credentials are incorrect!");
        } else {
          toast.error(error.message);
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="container py-4">
      <form
        className="d-flex m-auto text-center flex-column gap-4"
        style={{ width: "30%" }}
        onSubmit={handleLogin}
      >
        <h2 className="h2">Login</h2>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
          type="username"
          placeholder="Username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          type="password"
          placeholder="Password"
        />

        <button type="submit" className="btn btn-dark">
          {loading ? (
            <div className="spinner-border text-light" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
