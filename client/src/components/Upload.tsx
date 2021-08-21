import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { ResponseUserData } from "../types/User/LoggedIn";

const Upload: React.FC<RouteComponentProps<ResponseUserData>> = ({ match }) => {
  return (
    <section>
      <ul>
        <li>
          <button>
            <Link to={`${match.url}/video`}>Video</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to={`${match.url}/book`}>Book</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to={`${match.url}/note`}>Note</Link>
          </button>
        </li>
      </ul>

      <main>View Item</main>
    </section>
  );
};

export default Upload;
