import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { logoutUser } from "../../services/api.service";

export default function Dashborad() {

  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {

    try {
      const res = await logoutUser();
      if (res?.success) {
        logout();
        navigate("/login");
      }
    } catch (err) {
      console.error(err?.message);
    } 

  }

  return (
    <>
      <h3>Dashborad</h3>
      <p>{user?.name && user.name}</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}
