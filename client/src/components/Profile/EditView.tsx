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
          <input type="submit" value="Update" />
        </li>
      </form>
    </section>
  );
};

export default EditView;
