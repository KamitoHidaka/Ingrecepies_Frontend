import "./Profile.css";
import { useAuth } from "../../context/auth/useAuth";

export const Profile = () => {
  return (
    <div className="profile-container">

      <h1>Profile</h1>
      <p>{useAuth().user?.userName}</p>
    </div>
  );
};
