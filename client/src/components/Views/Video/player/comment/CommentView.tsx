import React from "react";
import { ChangeHandler } from "../../../../../types/changeHandler/change.interface";

const CommentView: React.FC<ChangeHandler> = ({
  handleSubmitBtn,
  handleChange,
}) => {
  return (
    <section>
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
    </section>
  );
};

export default CommentView;
