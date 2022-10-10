import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { useContext, useState } from "react";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignInForm = () => {
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(email,password)
      resetFormFields();

    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className="sign-in-container">
        <h2>Have an account?</h2>
        <span> Sign in with your email and password</span>

        <form onSubmit={() => {}}>
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
          <div className="buttons-container">

          <Button type="submit" onClick={handleSubmit}>
            Sign In
          </Button>
          <Button type = "button" buttonType="google" onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
          </div>
        </form>
      </div>
      
  );
};

export default SignInForm;
