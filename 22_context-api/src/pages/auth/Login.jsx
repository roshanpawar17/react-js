import { useEffect, useRef } from "react";
import { loginUser } from "../../services/api.service";
import { useAuth } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();
  const { user, login } = useAuth();

  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(formRef.current);
    const data = Object.fromEntries(form);

    try {
      const res = await loginUser(data);

      if (res?.success) {
        login(res?.data[0]);
        navigate('/dashboard');
      }

    } catch (err) {
      console.error(err?.message);
    } 
  }

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, []);


  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div>
          <label htmlFor="email">Enter Email</label>{" "}
          <input type="text" name="email" id="email" placeholder="Email" required/>
        </div>
        <div>
          <label htmlFor="password">Enter Password</label>{" "}
          <input type="text" name="password" id="password" placeholder="Password" required/>
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
