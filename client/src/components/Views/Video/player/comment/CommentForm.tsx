import React, { useContext } from "react";
import { ResUserDataContext } from "../../../../../App";
import { ChangeHandler } from "../../../../../types/changeHandler/change.interface";

const CommentForm: React.FC<ChangeHandler> = ({
  handleSubmitBtn,
  handleChange,
}) => {
  const isUser = useContext(ResUserDataContext);

  return (
    <section className="mt-7 mb-7">
      {isUser?.userId ? (
        <form onSubmit={(e) => handleSubmitBtn(e)}>
          <input
            className="border-b-2 w-72 border-gray-400 outline-none mr-1"
            type="text"
            placeholder=" ...Please you enter comment"
            autoComplete="off"
            name="comment"
            onChange={(e) => handleChange(e)}
          />
          <input
            className="p-1 w-16 rounded-md bg-black text-white cursor-pointer outline-none"
            type="submit"
            value="Send"
          />
        </form>
      ) : (
        <div>please you login</div>
      )}
    </section>
  );
};

export default CommentForm;
