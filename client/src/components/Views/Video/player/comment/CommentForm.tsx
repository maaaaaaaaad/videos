import React, { useContext } from "react";
import { ResUserDataContext } from "../../../../../App";
import { ChangeHandler } from "../../../../../types/changeHandler/change.interface";
import CommentView from "./CommentView";

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

      <article>
        <CommentView />
      </article>
    </section>
  );
};

export default CommentForm;
