import React, { useContext } from "react";
import { ResUserDataContext } from "../../../App";
import { ChangeHandler } from "../../../types/changeHandler/change.interface";

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
          <input
            type="file"
            name="avatar"
            accept="image/*"
            onChange={(e) => handleChange(e)}
          />
        </li>
        <li>
          <input
            type="email"
            autoComplete="off"
            placeholder={isUser!.email}
            name="email"
            pattern="^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$"
            onChange={(e) => handleChange(e)}
          />
        </li>
        <li>
          <input
            type="text"
            autoComplete="off"
            placeholder={isUser!.nickname}
            name="nickname"
            pattern="^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{2,8}$"
            onChange={(e) => handleChange(e)}
          />
        </li>
        <li>
          <input type="submit" value="Update" />
        </li>
      </form>
    </section>
  );
};

export default EditView;
