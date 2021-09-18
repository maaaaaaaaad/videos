import React, { useContext } from "react";
import { ResUserDataContext } from "../../../../../App";
import { ChangeHandler } from "../../../../../types/changeHandler/change.interface";

const CommentForm: React.FC<ChangeHandler> = ({
  handleSubmitBtn,
  handleChange,
}) => {
  const isUser = useContext(ResUserDataContext);

  return (
    <section>
      {isUser?.userId ? (
        <form onSubmit={(e) => handleSubmitBtn(e)}>
          <input
            type="text"
            placeholder="Please you enter comment"
            autoComplete="off"
            name="comment"
            onChange={(e) => handleChange(e)}
          />
          <input type="submit" value="OK" />
        </form>
      ) : (
        <div>please you login</div>
      )}
    </section>
  );
};

export default CommentForm;
