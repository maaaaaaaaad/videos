import React, { useContext } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { ResUserDataContext } from "../App";
import { ResponseUserData } from "../types/User/LoggedIn";

const Profile: React.FC<RouteComponentProps<ResponseUserData>> = ({
  match,
}) => {
  //
  const isUser = useContext(ResUserDataContext);

  return (
    <>
      {isUser ? (
        <section>
          <h1>{isUser?.nickname}'s Profile</h1>
          <ul>
            <li>
              <Link to={`${match.url}/edit`}>Edit</Link>
            </li>
            <li>
              <Link to={`${match.url}/change-password`}>Change password</Link>
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
