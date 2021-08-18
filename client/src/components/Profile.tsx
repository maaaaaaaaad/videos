import React, { useContext } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { userLogout } from "../api/user/logout";
import { ResUserDataContext } from "../App";
import { ResponseUserData } from "../types/User/LoggedIn";

const Profile: React.FC<RouteComponentProps<ResponseUserData>> = ({
  match,
}) => {
  //
  const isUser = useContext(ResUserDataContext);

  const handleLogout = async () => {
    //
    const confirm = window.confirm("Are you sure?");

    if (confirm) {
      await userLogout();
      window.location.href = "/";
    }
  };

  return (
    <>
      {isUser ? (
        <section>
          {isUser.avatarUrl && (
            <img
              src={`http://localhost:5000/${isUser.avatarUrl}`}
              width={300}
              height={300}
              alt="avatar"
            />
          )}

          <h1>{isUser?.nickname}'s Profile</h1>
          <ul>
            <li>
              <Link to={`${match.url}/edit`}>Edit</Link>
            </li>
            <li>
              <Link to={`${match.url}/change-password`}>Change password</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </section>
      ) : (
        "Please Login"
      )}
    </>
  );
};

export default Profile;
