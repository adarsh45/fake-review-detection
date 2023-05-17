import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    let data = JSON.stringify({
      username: username,
      email: email,
      password: password,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BACKEND_URL}/register`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast.success(response?.data?.message);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error("User already exists!");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="container py-4">
      <form
        className="d-flex m-auto text-center flex-column gap-4"
        style={{ width: "30%" }}
        onSubmit={handleRegister}
      >
        <h2 className="h2">Register</h2>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
          type="text"
          placeholder="Username"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          type="email"
          placeholder="Email"
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
            "Register"
          )}
        </button>
      </form>
    </div>
  );
};

export default Register;
