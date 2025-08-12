import { useState } from "react";
import { useNavigate } from "react-router-dom";


function LoginForm({ login }) {
  const [form, setForm] = useState({ username: "testuser", password: "password" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(form);
      navigate("/"); // go home on success
    } catch (err) {
      setError(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={form.username} onChange={handleChange} placeholder="username" />
      <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="password" />
      <button>Log in</button>
      {error && <div style={{color:'red'}}>{String(error)}</div>}
    </form>
  );
}

export default LoginForm;
