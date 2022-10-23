import * as Yup from "yup";
export const SignUp = Yup.object({
  name: Yup.string().min(4).max(15).required("Please Enter your name."),
  email: Yup.string().email().required("Please Enter your Email."),
  password: Yup.string().min(5).max(20).required("Please Enter Password."),
});

export const SignIn = Yup.object({
  email: Yup.string().email().required("Please Enter your Email."),
  password: Yup.string().min(5).max(20).required("Please Enter Password."),
});

