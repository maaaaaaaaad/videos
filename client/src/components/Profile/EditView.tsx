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
        <input
          type="text"
          autoComplete="off"
          placeholder="Nickname"
          name="nickname"
          value={isUser?.nickname || ""}
          pattern="^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          name="email"
          value={isUser?.email || ""}
          pattern="^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{2,8}$"
          onChange={(e) => handleChange(e)}
        />
        <input type="submit" value="Update" />
      </form>
    </section>
  );
};

export default EditView;
