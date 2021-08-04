import React, { useContext } from "react";
import { ResUserDataContext } from "../../App";

const EditProfile = () => {
  //
  const isUser = useContext(ResUserDataContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };

  return (
    <section>
      <h1>{isUser?.nickname}'s Edit page</h1>
      <form>
        <input
          type="text"
          autoComplete="off"
          placeholder="Nickname"
          name="nickname"
          value={isUser?.nickname || ""}
          pattern="^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$"
          onChange={handleChange}
        />
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          name="email"
          value={isUser?.email || ""}
          pattern="^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{2,8}$"
          onChange={handleChange}
        />
        <input type="submit" value="Update" />
      </form>
    </section>
  );
};

export default EditProfile;
