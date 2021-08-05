import React, { useContext } from "react";
import { ResUserDataContext } from "../../App";
import { ChangeHandler } from "../../types/Sign/Sign.interface";

const EditView: React.FC<ChangeHandler> = ({
  handleChange,
  handleSubmitBtn,
}) => {
  //
  const isUser = useContext(ResUserDataContext);

  return (
    <section>
      <h1>{isUser?.nickname}'s Edit page</h1>
      <form onSubmit={(e) => handleSubmitBtn(e)}>
        <li>
          <label htmlFor="nickname">
            Nickname
            <input
              id="nickname"
              type="text"
              autoComplete="off"
              placeholder={isUser?.nickname}
              name="nickname"
              pattern="^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{2,8}$"
              onChange={(e) => handleChange(e)}
            />
          </label>
        </li>
        <li>
          <label htmlFor="email">
            Email
            <input
              id="email"
              type="email"
              autoComplete="off"
              placeholder={isUser?.email}
              name="email"
              pattern="^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,8}$"
              onChange={(e) => handleChange(e)}
            />
          </label>
        </li>
        <li>
          <input type="submit" value="Update" />
        </li>
      </form>
    </section>
  );
};

export default EditView;
