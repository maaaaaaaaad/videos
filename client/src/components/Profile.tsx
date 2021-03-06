import React, { useContext } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { usersApiContext } from "../api/user/UserApi";
import { ResUserDataContext } from "../App";

const Profile: React.FC<RouteComponentProps> = ({ match }) => {
  //
  const api = useContext(usersApiContext);
  const isUser = useContext(ResUserDataContext);

  const handleLogout = async () => {
    //
    const confirm = window.confirm("Are you sure?");

    if (confirm) {
      await api.userLogout();
      window.location.href = "/";
    }
  };

  return (
    <>
      {isUser ? (
        <section>
          <img
            src={
              isUser.avatarUrl
                ? `${process.env.REACT_APP_SERVER_URL}/${isUser.avatarUrl}`
                : `${process.env.REACT_APP_SERVER_URL}/assets/images/defaultImg.png`
            }
            width={300}
            height={300}
            alt="avatar"
          />

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
