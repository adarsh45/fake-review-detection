import { useState } from "react";
import "./register.css";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulating login request
    setTimeout(() => {
      // Perform login logic here

      // Reset form fields and loading state
      setEmail("");
      setPassword("");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container py-4">
      <form
        className="d-flex m-auto text-center flex-column gap-4"
        style={{ width: "30%" }}
        onSubmit={handleRegister}
      >
        <h2 className="h2">Register</h2>
        <input className="form-control" type="text" placeholder="Name" />

        <input className="form-control" type="email" placeholder="Email" />
        <input
          className="form-control"
          type="password"
          placeholder="Password"
        />

        <button type="submit" className="btn btn-dark">
          {loading ? (
            <div className="spinner-border text-light" role="status">
              <span class="sr-only"></span>
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
