import React from "react";
import SignUpContexts from "./SignUp/SignUpContexts/SignUpContexts";
import SignUpControllers from "./SignUp/SignUpControllers";

const SignUp = () => {
  return (
    <section>
      <SignUpContexts>
        <SignUpControllers />
      </SignUpContexts>
    </section>
  );
};

export default SignUp;
